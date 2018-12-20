export const EPOCHS = {
	UNIX: BigInt(0),
	TWITTER: BigInt(1288834974657),
	DISCORD: BigInt(1420070400000)
}

export const SEQUENCE_BITS = BigInt(12);
export const WORKER_ID_BITS = BigInt(5);
export const PROCESS_ID_BITS = BigInt(5);

export const WORKER_ID_MASK = BigInt(0x3E0000);
export const PROCESS_ID_MASK = BigInt(0x1F000);
export const SEQUNCE_MASK = BigInt(-1) ^ (BigInt(-1) << SEQUENCE_BITS);

export const MAX_WORKER_ID = BigInt(-1) ^ (BigInt(-1) << WORKER_ID_BITS);
export const MAX_PROCESS_ID = BigInt(-1) ^ (BigInt(-1) << PROCESS_ID_BITS);

export const TIMESTAMP_LEFT_SHIFT = SEQUENCE_BITS + WORKER_ID_BITS + PROCESS_ID_BITS;
export const WORKER_ID_SHIFT = SEQUENCE_BITS + WORKER_ID_BITS;
export const PROCESS_ID_SHIFT = SEQUENCE_BITS;
