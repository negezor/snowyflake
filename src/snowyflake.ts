import type {
    IDeconstructedSnowflake,
    ISnowyflakeDeconstructOptions,
    ISnowyflakeGenerateCustomIdOptions,
    ISnowyflakeOptions,
    Snowflake,
} from './interfaces';

import {
    DEFAULT_SEQUENCE,
    DEFAULT_VALUE,
    Epoch,
    PROCESS_ID_DECONSTRUCT_MASK,
    PROCESS_ID_MASK,
    PROCESS_ID_SHIFT,
    SEQUNCE_MASK,
    TIMESTAMP_LEFT_SHIFT,
    USIGNED_INCREASE,
    WORKER_ID_DECONSTRUCT_MASK,
    WORKER_ID_MASK,
    WORKER_ID_SHIFT,
} from './constants';

import { getNowBigInt } from './helpers';

export class Snowyflake {
    /**
     * Snowflake start epoch
     */
    public readonly epoch: bigint;

    /**
     * Internal worker ID
     */
    public readonly workerId: bigint;

    /**
     * Internal process ID
     */
    public readonly processId: bigint;

    /**
     * Sequence increment for process
     */
    private sequence: bigint = DEFAULT_SEQUENCE;

    /**
     * Latest timestamp
     */
    private latestTimestamp: bigint = getNowBigInt();

    /**
     * Constructor
     */
    public constructor({
        epoch = Epoch.Unix,

        workerId = DEFAULT_VALUE,
        processId = DEFAULT_VALUE,
    }: ISnowyflakeOptions = {}) {
        this.epoch = epoch;

        this.workerId = workerId & WORKER_ID_MASK;
        this.processId = processId & PROCESS_ID_MASK;
    }

    /**
     * Generate a Snowflake
     */
    public nextId(): Snowflake {
        const timestamp = getNowBigInt();

        if (this.latestTimestamp === timestamp) {
            this.sequence = (this.sequence + USIGNED_INCREASE) & SEQUNCE_MASK;
        } else {
            this.sequence = DEFAULT_SEQUENCE;

            this.latestTimestamp = timestamp;
        }

        return this.generateCustomId({
            timestamp,
            sequence: this.sequence,
        });
    }

    /**
     * Deconstruct the Snowflake with local epoch
     */
    public deconstruct(snowflake: Snowflake): IDeconstructedSnowflake {
        return Snowyflake.deconstruct(snowflake, {
            epoch: this.epoch,
        });
    }

    /**
     * Generate a custom Snowflake
     */
    public generateCustomId({ timestamp, sequence }: ISnowyflakeGenerateCustomIdOptions): Snowflake {
        return (
            ((timestamp - this.epoch) << TIMESTAMP_LEFT_SHIFT) |
            (this.workerId << WORKER_ID_SHIFT) |
            (this.processId << PROCESS_ID_SHIFT) |
            sequence
        );
    }

    /**
     * Deconstruct the Snowflake timestamp
     */
    public static deconstructTimestamp(snowflake: Snowflake, epoch: bigint): bigint {
        return (snowflake >> TIMESTAMP_LEFT_SHIFT) + epoch;
    }

    /**
     * Deconstruct the Snowflake workerId
     */
    public static deconstructWorkerId(snowflake: Snowflake): bigint {
        return (snowflake & WORKER_ID_DECONSTRUCT_MASK) >> WORKER_ID_SHIFT;
    }

    /**
     * Deconstruct the Snowflake processId
     */
    public static deconstructProcessId(snowflake: Snowflake): bigint {
        return (snowflake & PROCESS_ID_DECONSTRUCT_MASK) >> PROCESS_ID_SHIFT;
    }

    /**
     * Deconstruct the Snowflake sequence
     */
    public static deconstructSequence(snowflake: Snowflake): bigint {
        return snowflake & SEQUNCE_MASK;
    }

    /**
     * Deconstruct the Snowflake
     */
    public static deconstruct(snowflake: Snowflake, { epoch }: ISnowyflakeDeconstructOptions): IDeconstructedSnowflake {
        return {
            timestamp: Snowyflake.deconstructTimestamp(snowflake, epoch),
            workerId: Snowyflake.deconstructWorkerId(snowflake),
            processId: Snowyflake.deconstructProcessId(snowflake),
            sequence: Snowyflake.deconstructSequence(snowflake),
        };
    }
}
