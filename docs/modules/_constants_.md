> ## [snowyflake](../README.md)

["constants"](_constants_.md) /

# External module: "constants"

### Index

#### Variables

* [DEFAULT_SEQUENCE](_constants_.md#const-default_sequence)
* [DEFAULT_VALUE](_constants_.md#const-default_value)
* [PROCESS_ID_BITS](_constants_.md#const-process_id_bits)
* [PROCESS_ID_DECONSTRUCT_MASK](_constants_.md#const-process_id_deconstruct_mask)
* [PROCESS_ID_MASK](_constants_.md#const-process_id_mask)
* [PROCESS_ID_SHIFT](_constants_.md#const-process_id_shift)
* [SEQUENCE_BITS](_constants_.md#const-sequence_bits)
* [SEQUNCE_MASK](_constants_.md#const-sequnce_mask)
* [SIGNED_INCREASE](_constants_.md#const-signed_increase)
* [TIMESTAMP_LEFT_SHIFT](_constants_.md#const-timestamp_left_shift)
* [USIGNED_INCREASE](_constants_.md#const-usigned_increase)
* [WORKER_ID_BITS](_constants_.md#const-worker_id_bits)
* [WORKER_ID_DECONSTRUCT_MASK](_constants_.md#const-worker_id_deconstruct_mask)
* [WORKER_ID_MASK](_constants_.md#const-worker_id_mask)
* [WORKER_ID_SHIFT](_constants_.md#const-worker_id_shift)

#### Object literals

* [Epochs](_constants_.md#const-epochs)

## Variables

### `Const` DEFAULT_SEQUENCE

● **DEFAULT_SEQUENCE**: *`0n`* =  DEFAULT_VALUE

*Defined in [constants.ts:8](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L8)*

___

### `Const` DEFAULT_VALUE

● **DEFAULT_VALUE**: *`0n`* =  0n

*Defined in [constants.ts:7](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L7)*

___

### `Const` PROCESS_ID_BITS

● **PROCESS_ID_BITS**: *`5n`* =  5n

*Defined in [constants.ts:14](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L14)*

___

### `Const` PROCESS_ID_DECONSTRUCT_MASK

● **PROCESS_ID_DECONSTRUCT_MASK**: *`126976n`* =  0x1F000n

*Defined in [constants.ts:18](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L18)*

___

### `Const` PROCESS_ID_MASK

● **PROCESS_ID_MASK**: *bigint* =  SIGNED_INCREASE ^ (SIGNED_INCREASE << PROCESS_ID_BITS)

*Defined in [constants.ts:21](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L21)*

___

### `Const` PROCESS_ID_SHIFT

● **PROCESS_ID_SHIFT**: *`12n`* =  SEQUENCE_BITS

*Defined in [constants.ts:26](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L26)*

___

### `Const` SEQUENCE_BITS

● **SEQUENCE_BITS**: *`12n`* =  12n

*Defined in [constants.ts:15](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L15)*

___

### `Const` SEQUNCE_MASK

● **SEQUNCE_MASK**: *bigint* =  SIGNED_INCREASE ^ (SIGNED_INCREASE << SEQUENCE_BITS)

*Defined in [constants.ts:22](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L22)*

___

### `Const` SIGNED_INCREASE

● **SIGNED_INCREASE**: *`-1n`* =  -1n

*Defined in [constants.ts:11](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L11)*

___

### `Const` TIMESTAMP_LEFT_SHIFT

● **TIMESTAMP_LEFT_SHIFT**: *bigint* =  SEQUENCE_BITS + WORKER_ID_BITS + PROCESS_ID_BITS

*Defined in [constants.ts:24](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L24)*

___

### `Const` USIGNED_INCREASE

● **USIGNED_INCREASE**: *`1n`* =  1n

*Defined in [constants.ts:10](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L10)*

___

### `Const` WORKER_ID_BITS

● **WORKER_ID_BITS**: *`5n`* =  5n

*Defined in [constants.ts:13](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L13)*

___

### `Const` WORKER_ID_DECONSTRUCT_MASK

● **WORKER_ID_DECONSTRUCT_MASK**: *`4063232n`* =  0x3E0000n

*Defined in [constants.ts:17](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L17)*

___

### `Const` WORKER_ID_MASK

● **WORKER_ID_MASK**: *bigint* =  SIGNED_INCREASE ^ (SIGNED_INCREASE << WORKER_ID_BITS)

*Defined in [constants.ts:20](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L20)*

___

### `Const` WORKER_ID_SHIFT

● **WORKER_ID_SHIFT**: *bigint* =  SEQUENCE_BITS + WORKER_ID_BITS

*Defined in [constants.ts:25](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L25)*

___

## Object literals

### `Const` Epochs

### ■ **Epochs**: *object*

*Defined in [constants.ts:1](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L1)*

###  DISCORD

● **DISCORD**: *bigint* =  1420070400000n

*Defined in [constants.ts:4](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L4)*

###  TWITTER

● **TWITTER**: *bigint* =  1288834974657n

*Defined in [constants.ts:3](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L3)*

###  UNIX

● **UNIX**: *bigint* =  0n

*Defined in [constants.ts:2](https://github.com/negezor/snowyflake/blob/3efa9e8/src/constants.ts#L2)*

___