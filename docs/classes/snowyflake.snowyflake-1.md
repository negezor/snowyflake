[snowyflake](../README.md) / [snowyflake](../modules/snowyflake.md) / Snowyflake

# Class: Snowyflake

[snowyflake](../modules/snowyflake.md).Snowyflake

## Table of contents

### Constructors

- [constructor](snowyflake.snowyflake-1.md#constructor)

### Properties

- [epoch](snowyflake.snowyflake-1.md#epoch)
- [latestTimestamp](snowyflake.snowyflake-1.md#latesttimestamp)
- [processId](snowyflake.snowyflake-1.md#processid)
- [sequence](snowyflake.snowyflake-1.md#sequence)
- [workerId](snowyflake.snowyflake-1.md#workerid)

### Methods

- [deconstruct](snowyflake.snowyflake-1.md#deconstruct)
- [generateCustomId](snowyflake.snowyflake-1.md#generatecustomid)
- [nextId](snowyflake.snowyflake-1.md#nextid)
- [deconstruct](snowyflake.snowyflake-1.md#deconstruct)
- [deconstructProcessId](snowyflake.snowyflake-1.md#deconstructprocessid)
- [deconstructSequence](snowyflake.snowyflake-1.md#deconstructsequence)
- [deconstructTimestamp](snowyflake.snowyflake-1.md#deconstructtimestamp)
- [deconstructWorkerId](snowyflake.snowyflake-1.md#deconstructworkerid)

## Constructors

### constructor

\+ **new Snowyflake**(`__namedParameters?`: [*ISnowyflakeOptions*](../interfaces/interfaces.isnowyflakeoptions.md)): [*Snowyflake*](snowyflake.snowyflake-1.md)

Constructor

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*ISnowyflakeOptions*](../interfaces/interfaces.isnowyflakeoptions.md) |

**Returns:** [*Snowyflake*](snowyflake.snowyflake-1.md)

Defined in: [snowyflake.ts:56](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L56)

## Properties

### epoch

• `Readonly` **epoch**: *bigint*

Snowflake start epoch

Defined in: [snowyflake.ts:36](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L36)

___

### latestTimestamp

• `Private` **latestTimestamp**: *bigint*

Latest timestamp

Defined in: [snowyflake.ts:56](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L56)

___

### processId

• `Readonly` **processId**: *bigint*

Internal process ID

Defined in: [snowyflake.ts:46](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L46)

___

### sequence

• `Private` **sequence**: *bigint*

Sequence increment for process

Defined in: [snowyflake.ts:51](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L51)

___

### workerId

• `Readonly` **workerId**: *bigint*

Internal worker ID

Defined in: [snowyflake.ts:41](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L41)

## Methods

### deconstruct

▸ **deconstruct**(`snowflake`: *bigint*): [*IDeconstructedSnowflake*](../interfaces/interfaces.ideconstructedsnowflake.md)

Deconstruct the Snowflake with local epoch

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |

**Returns:** [*IDeconstructedSnowflake*](../interfaces/interfaces.ideconstructedsnowflake.md)

Defined in: [snowyflake.ts:96](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L96)

___

### generateCustomId

▸ **generateCustomId**(`__namedParameters`: [*ISnowyflakeGenerateCustomIdOptions*](../interfaces/interfaces.isnowyflakegeneratecustomidoptions.md)): *bigint*

Generate a custom Snowflake

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*ISnowyflakeGenerateCustomIdOptions*](../interfaces/interfaces.isnowyflakegeneratecustomidoptions.md) |

**Returns:** *bigint*

Defined in: [snowyflake.ts:105](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L105)

___

### nextId

▸ **nextId**(): *bigint*

Generate a Snowflake

**Returns:** *bigint*

Defined in: [snowyflake.ts:76](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L76)

___

### deconstruct

▸ `Static`**deconstruct**(`snowflake`: *bigint*, `__namedParameters`: [*ISnowyflakeDeconstructOptions*](../interfaces/interfaces.isnowyflakedeconstructoptions.md)): [*IDeconstructedSnowflake*](../interfaces/interfaces.ideconstructedsnowflake.md)

Deconstruct the Snowflake

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |
`__namedParameters` | [*ISnowyflakeDeconstructOptions*](../interfaces/interfaces.isnowyflakedeconstructoptions.md) |

**Returns:** [*IDeconstructedSnowflake*](../interfaces/interfaces.ideconstructedsnowflake.md)

Defined in: [snowyflake.ts:148](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L148)

___

### deconstructProcessId

▸ `Static`**deconstructProcessId**(`snowflake`: *bigint*): *bigint*

Deconstruct the Snowflake processId

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |

**Returns:** *bigint*

Defined in: [snowyflake.ts:134](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L134)

___

### deconstructSequence

▸ `Static`**deconstructSequence**(`snowflake`: *bigint*): *bigint*

Deconstruct the Snowflake sequence

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |

**Returns:** *bigint*

Defined in: [snowyflake.ts:141](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L141)

___

### deconstructTimestamp

▸ `Static`**deconstructTimestamp**(`snowflake`: *bigint*, `epoch`: *bigint*): *bigint*

Deconstruct the Snowflake timestamp

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |
`epoch` | *bigint* |

**Returns:** *bigint*

Defined in: [snowyflake.ts:120](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L120)

___

### deconstructWorkerId

▸ `Static`**deconstructWorkerId**(`snowflake`: *bigint*): *bigint*

Deconstruct the Snowflake workerId

#### Parameters:

Name | Type |
:------ | :------ |
`snowflake` | *bigint* |

**Returns:** *bigint*

Defined in: [snowyflake.ts:127](https://github.com/negezor/snowyflake/blob/c47a6c2/src/snowyflake.ts#L127)
