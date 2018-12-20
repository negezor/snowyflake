export interface SnowyflakeOptions {
	workerId?: bigint;
	processId?: bigint;
	sequence?: bigint;

	epoch?: bigint;
}

export interface SnowyflakeGenerateCustomIdOptions {
	timestamp: bigint;
	sequence: bigint;
}

export interface SnowyflakeDeconstructOptions {
	epoch?: bigint;
}

export type DeconstructedSnowflake = {
	timestamp: bigint,
	workerId: bigint,
	processId: bigint,
	sequence: bigint
};
