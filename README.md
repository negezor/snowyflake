<p align="center">
<a href="https://www.npmjs.com/package/snowyflake"><img src="https://img.shields.io/npm/v/snowyflake.svg?style=flat-square" alt="NPM version"></a>
<a href="https://travis-ci.org/negezor/snowyflake"><img src="https://img.shields.io/travis/negezor/snowyflake.svg?style=flat-square" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/snowyflake"><img src="https://img.shields.io/npm/dt/snowyflake.svg?style=flat-square" alt="NPM downloads"></a>
<a href="https://www.codacy.com/app/negezor/snowyflake"><img src="https://img.shields.io/codacy/grade/25ee36d46e6e498981a74f8b0653aacc.svg?style=flat-square" alt="Code quality"></a>
</p>

Snowyflake - A modern implementation Snowflake on TypeScript

## Example usage
```js
import Snowlyflake, { EPOCHS }  from './';

console.log(new Snowlyflake);

const snowlyflake = new Snowlyflake({
	workerId: 1n,
	epoch: EPOCHS.DISCORD // BigInt timestamp
});

const snowflake = snowlyflake.nextId();

console.log('Snowflake', snowflake); // => 525232527980494849n

const deconstructSnowflake = snowlyflake.deconstruct(snowflake);

console.log('Deconstructed Snowflake', deconstructSnowflake); // =>
// { timestamp: 1545295593019n,
//   workerId: 1n,
//   processId: 0n,
//   sequence: 1n }
```
