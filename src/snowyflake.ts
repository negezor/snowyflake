import {
	Snowflake,

	SnowyflakeOptions,
	SnowyflakeDeconstructOptions,
	SnowyflakeGenerateCustomIdOptions,

	DeconstructedSnowflake
} from './interfaces';

import {
	EPOCHS,
	DEFAULT_VALUE,
	DEFAULT_SEQUENCE,

	TIMESTAMP_LEFT_SHIFT,
	WORKER_ID_SHIFT,
	PROCESS_ID_SHIFT,

	SEQUNCE_MASK,
	WORKER_ID_MASK,
	PROCESS_ID_MASK,
	WORKER_ID_DECONSTRUCT_MASK,
	PROCESS_ID_DECONSTRUCT_MASK,

	USIGNED_INCREASE
} from './utils/constants';
import { getNowBigInt } from './utils/helpers';

/**
 * NOTE: The BigInt constructor is used instead of a primitive because of a compiler bug.
 */
export default class Snowyflake {
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
	constructor({
		epoch = EPOCHS.UNIX,

		workerId = DEFAULT_VALUE,
		processId = DEFAULT_VALUE
	}: SnowyflakeOptions = {}) {
		this.epoch = epoch;

		this.workerId = workerId & WORKER_ID_MASK;
		this.processId = processId & PROCESS_ID_MASK;
	}

	/**
	 * Generate a Snowflake
	 */
	nextId(): Snowflake {
		const timestamp = getNowBigInt();

		if (this.latestTimestamp === timestamp) {
			this.sequence = (this.sequence + USIGNED_INCREASE) & SEQUNCE_MASK;
		} else {
			this.sequence = DEFAULT_SEQUENCE;
		}

		this.latestTimestamp = timestamp;

		return this.generateCustomId({
			timestamp,
			sequence: this.sequence
		});
	}

	/**
	 * Deconstruct the Snowflake with local epoch
	 */
	deconstruct(snowflake: Snowflake): DeconstructedSnowflake {
		return Snowyflake.deconstruct(snowflake, {
			epoch: this.epoch
		});
	}

	/**
	 * Generate a custom Snowflake
	 */
	generateCustomId({
		timestamp,
		sequence
	}: SnowyflakeGenerateCustomIdOptions): Snowflake {
		return (
			(timestamp - this.epoch) << TIMESTAMP_LEFT_SHIFT
			| this.workerId << WORKER_ID_SHIFT
			| this.processId << PROCESS_ID_SHIFT
			| sequence
		);
	}

	/**
	 * Deconstruct the Snowflake timestamp
	 */
	static deconstructTimestamp(snowflake: Snowflake, epoch: bigint = EPOCHS.UNIX): bigint {
		return (snowflake >> TIMESTAMP_LEFT_SHIFT) + epoch;
	}

	/**
	 * Deconstruct the Snowflake workerId
	 */
	static deconstructWorkerId(snowflake: Snowflake): bigint {
		return (snowflake & WORKER_ID_DECONSTRUCT_MASK) >> WORKER_ID_SHIFT;
	}

	/**
	 * Deconstruct the Snowflake processId
	 */
	static deconstructProcessId(snowflake: Snowflake): bigint {
		return (snowflake & PROCESS_ID_DECONSTRUCT_MASK) >> PROCESS_ID_SHIFT;
	}

	/**
	 * Deconstruct the Snowflake sequence
	 */
	static deconstructSequence(snowflake: Snowflake): bigint {
		return snowflake & SEQUNCE_MASK;
	}

	/**
	 * Deconstruct the Snowflake
	 */
	static deconstruct(
		snowflake: Snowflake,
		{ epoch }: SnowyflakeDeconstructOptions = {}
	): DeconstructedSnowflake {
		return {
			timestamp: Snowyflake.deconstructTimestamp(snowflake, epoch),
			workerId: Snowyflake.deconstructWorkerId(snowflake),
			processId: Snowyflake.deconstructProcessId(snowflake),
			sequence: Snowyflake.deconstructSequence(snowflake)
		};
	}
}
