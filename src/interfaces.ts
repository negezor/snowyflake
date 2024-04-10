export type Snowflake = bigint;

export interface ISnowyflakeOptions {
    epoch?: bigint;

    workerId?: bigint;
    processId?: bigint;
}

export interface ISnowyflakeGenerateCustomIdOptions {
    timestamp: bigint;
    sequence: bigint;
}

export interface ISnowyflakeDeconstructOptions {
    epoch: bigint;
}

export interface IDeconstructedSnowflake {
    timestamp: bigint;
    workerId: bigint;
    processId: bigint;
    sequence: bigint;
}
