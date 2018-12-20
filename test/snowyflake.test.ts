import Snowyflake from '../';

describe('Snowyflake', () => {
	const EPOCH = BigInt(Date.UTC(2018, 1, 1, 0, 0, 0));
	const WORKER_ID = 2n;
	const PROCESS_ID = 5n;

	describe('#nextId', () => {
		const snowyflake = new Snowyflake({
			epoch: EPOCH,
			workerId: WORKER_ID,
			processId: PROCESS_ID
		});

		it('should be valid generation Snowflake', () => {
			const snowflake = snowyflake.nextId();
			const result = snowyflake.deconstruct(snowflake);

			expect(result.timestamp - (result.timestamp - EPOCH)).toBe(EPOCH);
			expect(result.workerId).toBe(WORKER_ID);
			expect(result.processId).toBe(PROCESS_ID);
		});
	});

	describe('#deconstruct', () => {
		const snowyflake = new Snowyflake({
			epoch: EPOCH,
			workerId: WORKER_ID,
			processId: PROCESS_ID
		});

		it('should be valid deconstruct Snowflake', () => {
			const result = snowyflake.deconstruct(116912706468204545n);

			expect(result.timestamp - (result.timestamp - EPOCH)).toBe(EPOCH);
			expect(result.workerId).toBe(WORKER_ID);
			expect(result.processId).toBe(PROCESS_ID);
		});
	});
});
