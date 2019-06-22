> ## [snowyflake](../README.md)

["snowyflake"](../modules/_snowyflake_.md) / [Snowyflake](_snowyflake_.snowyflake.md) /

# Class: Snowyflake

NOTE: The BigInt constructor is used instead of a primitive because of a compiler bug.

## Hierarchy

* **Snowyflake**

### Index

#### Constructors

* [constructor](_snowyflake_.snowyflake.md#constructor)

#### Properties

* [epoch](_snowyflake_.snowyflake.md#epoch)
* [latestTimestamp](_snowyflake_.snowyflake.md#private-latesttimestamp)
* [processId](_snowyflake_.snowyflake.md#processid)
* [sequence](_snowyflake_.snowyflake.md#private-sequence)
* [workerId](_snowyflake_.snowyflake.md#workerid)

#### Methods

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

*Defined in [snowyflake.ts:59](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L59)*

Constructor

**Parameters:**

■`Default value` ` __namedParameters`: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`epoch` | bigint |  Epochs.UNIX |
`processId` | bigint |  DEFAULT_VALUE |
`workerId` | bigint |  DEFAULT_VALUE |

**Returns:** *[Snowyflake](_snowyflake_.snowyflake.md)*

___

## Properties

###  epoch

● **epoch**: *bigint*

*Defined in [snowyflake.ts:39](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L39)*

Snowflake start epoch

___

### `Private` latestTimestamp

● **latestTimestamp**: *bigint* =  getNowBigInt()

*Defined in [snowyflake.ts:59](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L59)*

Latest timestamp

___

###  processId

● **processId**: *bigint*

*Defined in [snowyflake.ts:49](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L49)*

Internal process ID

___

### `Private` sequence

● **sequence**: *bigint* =  DEFAULT_SEQUENCE

*Defined in [snowyflake.ts:54](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L54)*

Sequence increment for process

___

###  workerId

● **workerId**: *bigint*

*Defined in [snowyflake.ts:44](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L44)*

Internal worker ID

___

## Methods

###  deconstruct

▸ **deconstruct**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

*Defined in [snowyflake.ts:99](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L99)*

Deconstruct the Snowflake with local epoch

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

___

###  generateCustomId

▸ **generateCustomId**(`__namedParameters`: object): *[Snowflake](../modules/_interfaces_.md#snowflake)*

*Defined in [snowyflake.ts:108](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L108)*

Generate a custom Snowflake

**Parameters:**

■` __namedParameters`: *object*

Name | Type |
------ | ------ |
`sequence` | bigint |
`timestamp` | bigint |

**Returns:** *[Snowflake](../modules/_interfaces_.md#snowflake)*

___

###  nextId

▸ **nextId**(): *[Snowflake](../modules/_interfaces_.md#snowflake)*

*Defined in [snowyflake.ts:79](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L79)*

Generate a Snowflake

**Returns:** *[Snowflake](../modules/_interfaces_.md#snowflake)*

___

### `Static` deconstruct

▸ **deconstruct**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake), `__namedParameters`: object): *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

*Defined in [snowyflake.ts:151](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L151)*

Deconstruct the Snowflake

**Parameters:**

■` snowflake`: *[Snowflake](../modules/_interfaces_.md#snowflake)*

■` __namedParameters`: *object*

Name | Type |
------ | ------ |
`epoch` | bigint |

**Returns:** *[IDeconstructedSnowflake](../interfaces/_interfaces_.ideconstructedsnowflake.md)*

___

### `Static` deconstructProcessId

▸ **deconstructProcessId**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *bigint*

*Defined in [snowyflake.ts:137](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L137)*

Deconstruct the Snowflake processId

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*

___

### `Static` deconstructSequence

▸ **deconstructSequence**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake)): *bigint*

*Defined in [snowyflake.ts:144](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L144)*

Deconstruct the Snowflake sequence

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*

___

### `Static` deconstructTimestamp

▸ **deconstructTimestamp**(`snowflake`: [Snowflake](../modules/_interfaces_.md#snowflake), `epoch`: bigint): *bigint*

*Defined in [snowyflake.ts:123](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L123)*

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

*Defined in [snowyflake.ts:130](https://github.com/negezor/snowyflake/blob/3efa9e8/src/snowyflake.ts#L130)*

Deconstruct the Snowflake workerId

**Parameters:**

Name | Type |
------ | ------ |
`snowflake` | [Snowflake](../modules/_interfaces_.md#snowflake) |

**Returns:** *bigint*

___