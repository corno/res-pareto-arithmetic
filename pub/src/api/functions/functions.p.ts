import * as pt from "pareto-core-types"
import { TNumberRange } from "../types/types.p"

export type FAdd = ($: TNumberRange) => number

export type FMultiply = ($: TNumberRange) => number

export type FNegative = ($: number) => number

/**
 * if the denominator is 0, the return value is null
 * (division by 0)
 */
export type FDivideWithRemainder = (
    $: {
        readonly "numerator": number
        readonly "denominator": number
    }
) => null | {
    readonly "quotient": number
    readonly "remainder": number
}

export type FSubstract = ($: {
    readonly "minuend": number
    readonly "subtrahend": number
}) => number

/**
 * calculates the max of a range. If there are no entries, the result value is 0
 */
export type FMaxOrZero = (
    $: pt.Nested<number>
) => number


/**
 * calculates the max of a dictionary of number. If there are no entries, the result value is 0
 */
export type FDictionaryMaxOrZero = (
    $: pt.Dictionary<number>
) => number


/**
 * calculates the max of an array of numbers. If there are no entries, the result value is 0
 */
export type FArrayMaxOrZero = (
    $: pt.Array<number>
) => number


//MIN IS PROBLEMATIC; what is a good default value when there are no entries

// export type FMin = (
//     $: {
//         /**
//          * the maximum is needed for when the array of number is empty
//          * fatal if maximum is omitted and there are no numbers
//          */
//         maximum: null | number,
//         numbers: pt.Nested<number>
//     }
// ) => number

// export type FArrayMin = (
//     $: {
//         /**
//          * the maximum is needed for when the array of number is empty
//          * fatal if maximum is omitted and there are no numbers
//          */
//         maximum: null | number,
//         numbers: pt.Array<number>
//     }
// ) => number

// export type FDictionaryMin = (
//     $: {
//         /**
//          * the maximum is needed for when the array of number is empty
//          * fatal if maximum is omitted and there are no numbers
//          */
//         maximum: null | number,
//         numbers: pt.Dictionary<number>
//     }
// ) => number
