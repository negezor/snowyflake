<p align="center"><img src="https://raw.githubusercontent.com/negezor/snowyflake/master/docs/logo.svg?sanitize=true"></p>
<p align="center">
<a href="https://www.npmjs.com/package/snowyflake"><img src="https://img.shields.io/npm/v/snowyflake.svg?style=flat-square" alt="NPM version"></a>
<a href="https://github.com/negezor/snowyflake/actions/workflows/tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/negezor/snowyflake/tests.yml?style=flat-square" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/snowyflake"><img src="https://img.shields.io/npm/dt/snowyflake.svg?style=flat-square" alt="NPM downloads"></a>
</p>

Snowyflake - A modern implementation Snowflake on TypeScript

| 📖 [Documentation](docs/) |
|---------------------------|

## Installation
> **[Node.js](https://nodejs.org/) 16.0.0 or newer is required**

> **TypeScript config required `"target": "ES2019"` or higher**

### Yarn
Recommended
```
yarn add snowyflake
```

### NPM
```
npm i snowyflake
```

## Example usage
```js
import { Snowyflake, Epoch } from 'snowyflake';

const snowyflake = new Snowyflake({
    workerId: 1n,
    epoch: Epoch.Twitter // BigInt timestamp
});

const snowflake = snowyflake.nextId();

console.log(snowflake); // => 1075766315999952896n

const deconstructSnowflake = snowyflake.deconstruct(snowflake);

console.log(deconstructSnowflake); // =>
// { timestamp: 1545317651163n,
//     workerId: 1n,
//     processId: 0n,
//     sequence: 0n }

```
