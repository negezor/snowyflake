import {
	SnowyflakeOptions,
	SnowyflakeDeconstructOptions,
	SnowyflakeGenerateCustomIdOptions,

	DeconstructedSnowflake
} from './interfaces';

import {
	EPOCHS,

	TIMESTAMP_LEFT_SHIFT,
	WORKER_ID_SHIFT,
	PROCESS_ID_SHIFT,

	SEQUNCE_MASK,
	WORKER_ID_MASK,
	PROCESS_ID_MASK
} from './utils/constants';

/**
 * NOTE: The BigInt constructor is used instead of a primitive because of a compiler bug.
 */
export default class Snowyflake {
	/**
	 * Internal worker ID
	 */
	private readonly workerId: bigint;

	/**
	 * Internal process ID
	 */
	private readonly processId: bigint;

	/**
	 * Sequence increment for process
	 */
	private sequence: bigint;

	/**
	 * Snowflake start epoch
	 */
	private readonly epoch: bigint;

	/**
	 * Constructor
	 */
	constructor({
		workerId = BigInt(0),
		processId = BigInt(0),
		sequence = BigInt(0),

		epoch = EPOCHS.UNIX
	}: SnowyflakeOptions = {}) {
		this.workerId = workerId;
		this.processId = processId;
		this.sequence = sequence;

		this.epoch = epoch;
	}

	/**
	 * Generate a Snowflake
	 *
	 * @returns {Snowflake}
	 */
	nextId(): bigint {
		const timestamp = BigInt(Date.now());

		this.sequence = (this.sequence + BigInt(1)) & SEQUNCE_MASK;

		return this.generateCustomId({
			timestamp,
			sequence: this.sequence
		});
	}

	/**
	 * Deconstruct the Snowflake with local epoch
	 */
	deconstruct(snowflake: bigint): DeconstructedSnowflake {
		return Snowyflake.deconstruct(snowflake, {
			epoch: this.epoch
		});
	}

	/**
	 * Generate a custom Snowflake
	 *
	 * @return {Snowyflake}
	 */
	generateCustomId({
		timestamp,
		sequence
	}: SnowyflakeGenerateCustomIdOptions): bigint {
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
	static deconstructTimestamp(snowflake: bigint, epoch: bigint = EPOCHS.UNIX): bigint {
		return (snowflake >> TIMESTAMP_LEFT_SHIFT) + epoch;
	}

	/**
	 * Deconstruct the Snowflake workerId
	 */
	static deconstructWorkerId(snowflake: bigint): bigint {
		return (snowflake & WORKER_ID_MASK) >> WORKER_ID_SHIFT;
	}

	/**
	 * Deconstruct the Snowflake processId
	 */
	static deconstructProcessId(snowflake: bigint): bigint {
		return (snowflake & PROCESS_ID_MASK) >> PROCESS_ID_SHIFT;
	}

	/**
	 * Deconstruct the Snowflake sequence
	 */
	static deconstructSequence(snowflake: bigint): bigint {
		return snowflake & SEQUNCE_MASK;
	}

	/**
	 * Deconstruct the Snowflake
	 */
	static deconstruct(
		snowflake: bigint,
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
