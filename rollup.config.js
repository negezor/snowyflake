import typescriptPlugin from 'rollup-plugin-typescript2';

import { tmpdir } from 'os';
import { join as pathJoin } from 'path';

const cacheRoot = pathJoin(tmpdir(), '.rpt2_cache');

const src = pathJoin(__dirname, 'src');
const lib = pathJoin(__dirname, 'lib');

// eslint-disable-next-line import/no-default-export
export default {
	input: pathJoin(src, 'index.ts'),
	plugins: [
		typescriptPlugin({
			cacheRoot,

			useTsconfigDeclarationDir: false,

			tsconfigOverride: {
				outDir: lib,
				rootDir: src,
				include: [src]
			}
		})
	],
	output: [
		{
			file: pathJoin(lib, 'index.js'),
			format: 'cjs',
			exports: 'named'
		},
		{
			file: pathJoin(lib, 'index.mjs'),
			format: 'esm'
		}
	]
};
