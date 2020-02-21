import { Snowyflake } from '..';

describe('Snowyflake', (): void => {
	const EPOCH = BigInt(Date.UTC(2018, 1, 1, 0, 0, 0));
	const WORKER_ID = 2n;
	const PROCESS_ID = 5n;

	describe('#nextId', (): void => {
		const snowyflake = new Snowyflake({
			epoch: EPOCH,
			workerId: WORKER_ID,
			processId: PROCESS_ID
		});

		it('should be valid generation Snowflake', (): void => {
			const snowflake = snowyflake.nextId();
			const result = snowyflake.deconstruct(snowflake);

			expect(result.timestamp - (result.timestamp - EPOCH)).toBe(EPOCH);
			expect(result.workerId).toBe(WORKER_ID);
			expect(result.processId).toBe(PROCESS_ID);
		});
	});

	describe('#deconstruct', (): void => {
		const snowyflake = new Snowyflake({
			epoch: EPOCH,
			workerId: WORKER_ID,
			processId: PROCESS_ID
		});

		it('should be valid deconstruct Snowflake', (): void => {
			const result = snowyflake.deconstruct(116912706468204545n);

			expect(result.timestamp - (result.timestamp - EPOCH)).toBe(EPOCH);
			expect(result.workerId).toBe(WORKER_ID);
			expect(result.processId).toBe(PROCESS_ID);
		});
	});

	describe('#generateCustomId', (): void => {
		const snowyflake = new Snowyflake({
			epoch: EPOCH,
			workerId: WORKER_ID,
			processId: PROCESS_ID
		});

		it('should be valid generate Snowflake', (): void => {
			// 1 year
			const timestamp = EPOCH + 31536000000n;

			const snowflake = snowyflake.generateCustomId({
				timestamp,
				sequence: 25n
			});

			const result = Snowyflake.deconstruct(snowflake, {
				epoch: EPOCH
			});

			expect(result.timestamp).toBe(timestamp);
			expect(result.workerId).toBe(WORKER_ID);
			expect(result.processId).toBe(PROCESS_ID);
			expect(result.sequence).toBe(25n);
		});
	});

	describe('static #deconstructTimestamp', (): void => {
		it('should be valid deconstruct timestamp Snowflake', (): void => {
			const timestamp = Snowyflake.deconstructTimestamp(116912706468204545n, EPOCH);

			expect(timestamp - (timestamp - EPOCH)).toBe(EPOCH);
		});
	});

	describe('static #deconstructTimestamp', (): void => {
		it('should be valid deconstruct workerId Snowflake', (): void => {
			const workerId = Snowyflake.deconstructWorkerId(183507330493861889n);

			expect(workerId).toBe(WORKER_ID);
		});
	});

	describe('static #deconstructProcessId', (): void => {
		it('should be valid deconstruct processId Snowflake', (): void => {
			const processId = Snowyflake.deconstructProcessId(183507637844070401n);

			expect(processId).toBe(PROCESS_ID);
		});
	});

	describe('static #deconstructSequence', (): void => {
		it('should be valid deconstruct sequence Snowflake', (): void => {
			const sequence = Snowyflake.deconstructSequence(183511245515935779n);

			expect(sequence).toBe(35n);
		});
	});
});
