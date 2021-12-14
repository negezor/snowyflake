[snowyflake](../README.md) / Snowyflake

# Class: Snowyflake

## Table of contents

### Constructors

- [constructor](Snowyflake.md#constructor)

### Properties

- [epoch](Snowyflake.md#epoch)
- [latestTimestamp](Snowyflake.md#latesttimestamp)
- [processId](Snowyflake.md#processid)
- [sequence](Snowyflake.md#sequence)
- [workerId](Snowyflake.md#workerid)

### Methods

- [deconstruct](Snowyflake.md#deconstruct)
- [generateCustomId](Snowyflake.md#generatecustomid)
- [nextId](Snowyflake.md#nextid)
- [deconstruct](Snowyflake.md#deconstruct)
- [deconstructProcessId](Snowyflake.md#deconstructprocessid)
- [deconstructSequence](Snowyflake.md#deconstructsequence)
- [deconstructTimestamp](Snowyflake.md#deconstructtimestamp)
- [deconstructWorkerId](Snowyflake.md#deconstructworkerid)

## Constructors

### constructor

• **new Snowyflake**(`__namedParameters?`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ISnowyflakeOptions`](../interfaces/ISnowyflakeOptions.md) |

#### Defined in

[snowyflake.ts:61](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L61)

## Properties

### epoch

• `Readonly` **epoch**: `bigint`

Snowflake start epoch

#### Defined in

[snowyflake.ts:36](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L36)

___

### latestTimestamp

• `Private` **latestTimestamp**: `bigint`

Latest timestamp

#### Defined in

[snowyflake.ts:56](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L56)

___

### processId

• `Readonly` **processId**: `bigint`

Internal process ID

#### Defined in

[snowyflake.ts:46](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L46)

___

### sequence

• `Private` **sequence**: `bigint` = `DEFAULT_SEQUENCE`

Sequence increment for process

#### Defined in

[snowyflake.ts:51](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L51)

___

### workerId

• `Readonly` **workerId**: `bigint`

Internal worker ID

#### Defined in

[snowyflake.ts:41](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L41)

## Methods

### deconstruct

▸ **deconstruct**(`snowflake`): [`IDeconstructedSnowflake`](../interfaces/IDeconstructedSnowflake.md)

Deconstruct the Snowflake with local epoch

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |

#### Returns

[`IDeconstructedSnowflake`](../interfaces/IDeconstructedSnowflake.md)

#### Defined in

[snowyflake.ts:96](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L96)

___

### generateCustomId

▸ **generateCustomId**(`__namedParameters`): `bigint`

Generate a custom Snowflake

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ISnowyflakeGenerateCustomIdOptions`](../interfaces/ISnowyflakeGenerateCustomIdOptions.md) |

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:105](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L105)

___

### nextId

▸ **nextId**(): `bigint`

Generate a Snowflake

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:76](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L76)

___

### deconstruct

▸ `Static` **deconstruct**(`snowflake`, `__namedParameters`): [`IDeconstructedSnowflake`](../interfaces/IDeconstructedSnowflake.md)

Deconstruct the Snowflake

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |
| `__namedParameters` | [`ISnowyflakeDeconstructOptions`](../interfaces/ISnowyflakeDeconstructOptions.md) |

#### Returns

[`IDeconstructedSnowflake`](../interfaces/IDeconstructedSnowflake.md)

#### Defined in

[snowyflake.ts:148](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L148)

___

### deconstructProcessId

▸ `Static` **deconstructProcessId**(`snowflake`): `bigint`

Deconstruct the Snowflake processId

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:134](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L134)

___

### deconstructSequence

▸ `Static` **deconstructSequence**(`snowflake`): `bigint`

Deconstruct the Snowflake sequence

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:141](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L141)

___

### deconstructTimestamp

▸ `Static` **deconstructTimestamp**(`snowflake`, `epoch`): `bigint`

Deconstruct the Snowflake timestamp

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |
| `epoch` | `bigint` |

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:120](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L120)

___

### deconstructWorkerId

▸ `Static` **deconstructWorkerId**(`snowflake`): `bigint`

Deconstruct the Snowflake workerId

#### Parameters

| Name | Type |
| :------ | :------ |
| `snowflake` | `bigint` |

#### Returns

`bigint`

#### Defined in

[snowyflake.ts:127](https://github.com/negezor/snowyflake/blob/2de9d3a/src/snowyflake.ts#L127)
