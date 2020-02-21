[snowyflake](../README.md) › ["snowyflake"](../modules/_snowyflake_.md) › [Snowyflake](_snowyflake_.snowyflake.md)

# Class: Snowyflake

## Hierarchy

* **Snowyflake**

## Index

### Constructors

* [constructor](_snowyflake_.snowyflake.md#constructor)

### Properties

* [epoch](_snowyflake_.snowyflake.md#epoch)
* [latestTimestamp](_snowyflake_.snowyflake.md#private-latesttimestamp)
* [processId](_snowyflake_.snowyflake.md#processid)
* [sequence](_snowyflake_.snowyflake.md#private-sequence)
* [workerId](_snowyflake_.snowyflake.md#workerid)

### Methods

* [deconstruct](_snowyflake_.snowyflake.md#deconstruct)
* [generateCustomId](_snowyflake_.snowyflake.md#generatecustomid)
* [nextId](_snowyflake_.snowyflake.md#nextid)
* [deconstruct](_snowyflake_.snowyflake.md#static-deconstruct)
* [deconstructProcessId](_snowyflake_.snowyflake.md#static-deconstructprocessid)
* [deconstructSequence](_snowyflake_.snowyflake.md#static-deconstructsequence)
* [deconstructTimestamp](_snowyflake_.snowyflake.md#static-deconstructtimestamp)
* [deconstructWorkerId](_snowyflake_.snowyflake.md#static-deconstructworkerid)

## Constructors

###  constructor

\+ **new Snowyflake**(`__namedParameters`: object): *[Snowyflake](_snowyflake_.snowyflake.md)*

*Defined in [snowyflake.ts:56](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L56)*

Constructor

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`epoch` | bigint | Epoch.UNIX |
`processId` | bigint | DEFAULT_VALUE |
`workerId` | bigint | DEFAULT_VALUE |

**Returns:** *[Snowyflake](_snowyflake_.snowyflake.md)*

## Properties

###  epoch

• **epoch**: *bigint*

*Defined in [snowyflake.ts:36](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L36)*

Snowflake start epoch

___

### `Private` latestTimestamp

• **latestTimestamp**: *bigint* = getNowBigInt()

*Defined in [snowyflake.ts:56](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L56)*

Latest timestamp

___

###  processId

• **processId**: *bigint*

*Defined in [snowyflake.ts:46](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L46)*

Internal process ID

___

### `Private` sequence

• **sequence**: *bigint* = DEFAULT_SEQUENCE

*Defined in [snowyflake.ts:51](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L51)*

Sequence increment for process

___

###  workerId

• **workerId**: *bigint*

*Defined in [snowyflake.ts:41](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L41)*

Internal worker ID

## Methods

###  deconstruct

▸ **deconstruct**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

*Defined in [snowyflake.ts:96](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L96)*

Deconstruct the Snowflake with local epoch

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

___

###  generateCustomId

▸ **generateCustomId**(`__namedParameters`: object): *[Snowflake](../modules/_interfaces_.md#snowflake)*

*Defined in [snowyflake.ts:105](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L105)*

Generate a custom Snowflake

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`sequence` | bigint |
`timestamp` | bigint |

**Returns:** *[Snowflake](../modules/_interfaces_.md#snowflake)*

___

###  nextId

▸ **nextId**(): *[Snowflake](../modules/_interfaces_.md#snowflake)*

*Defined in [snowyflake.ts:76](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L76)*

Generate a Snowflake

**Returns:** *[Snowflake](../modules/_interfaces_.md#snowflake)*

___

### `Static` deconstruct

▸ **deconstruct**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake), `__namedParameters`: object): *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

*Defined in [snowyflake.ts:148](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L148)*

Deconstruct the Snowflake

**Parameters:**

▪ **snowflake**: *[Snowflake](../modules/_interfaces_.md#snowflake)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`epoch` | bigint |

**Returns:** *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

___

### `Static` deconstructProcessId

▸ **deconstructProcessId**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *bigint*

*Defined in [snowyflake.ts:134](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L134)*

Deconstruct the Snowflake processId

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*

___

### `Static` deconstructSequence

▸ **deconstructSequence**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *bigint*

*Defined in [snowyflake.ts:141](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L141)*

Deconstruct the Snowflake sequence

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*

___

### `Static` deconstructTimestamp

▸ **deconstructTimestamp**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake), `epoch`: bigint): *bigint*

*Defined in [snowyflake.ts:120](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L120)*

Deconstruct the Snowflake timestamp

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |
`epoch` | bigint |

**Returns:** *bigint*

___

### `Static` deconstructWorkerId

▸ **deconstructWorkerId**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *bigint*

*Defined in [snowyflake.ts:127](https://github.com/negezor/snowyflake/blob/d888ffb/src/snowyflake.ts#L127)*

Deconstruct the Snowflake workerId

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*
