// eslint-disable-next-line import/prefer-default-export
export const getNowBigInt = (): bigint => (
	BigInt(Date.now())
);
