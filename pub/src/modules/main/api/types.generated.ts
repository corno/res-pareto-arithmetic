import * as pt from "pareto-core-types"

export type TDivisionData = {
    readonly "denominator": number
    readonly "numerator": number
}

export type TDivisionResult = null | {
    readonly "quotient": number
    readonly "remainder": number
}

export type TNumberArray = pt.Array<number>

export type TNumberDictionary = pt.Dictionary<number>

export type TNumberRange = pt.Nested<number>

export type TSubstractData = {
    readonly "minuend": number
    readonly "subtrahend": number
}

export type FAdd = ($: TNumberRange) => number

export type FArrayMaxOrZero = ($: TNumberArray) => number

export type FDictionaryMaxOrZero = ($: TNumberDictionary) => number

export type FDivideWithRemainder = ($: TDivisionData) => TDivisionResult

export type FMaxOrZero = ($: TNumberRange) => number

export type FMultiply = ($: TNumberRange) => number

export type FNegate = ($: number) => number

export type FSubstract = ($: TSubstractData) => number