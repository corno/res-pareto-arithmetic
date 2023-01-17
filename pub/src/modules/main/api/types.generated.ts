import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TDivisionData = {
    readonly 'denominator': number
    readonly 'numerator': number
}

export type TDivisionResult = null | {
    readonly 'quotient': number
    readonly 'remainder': number
}

export type TNumberArray = pt.Array<number>

export type TNumberDictionary = pt.Dictionary<number>

export type TNumberRange = pt.Nested<number>

export type TSubstractData = {
    readonly 'minuend': number
    readonly 'subtrahend': number
}

export type FAdd = ($: TNumberRange) => mcommon.TNumber

export type FArrayMaxOrZero = ($: TNumberArray) => mcommon.TNumber

export type FDictionaryMaxOrZero = ($: TNumberDictionary) => mcommon.TNumber

export type FDivideWithRemainder = ($: TDivisionData) => TDivisionResult

export type FMaxOrZero = ($: TNumberRange) => mcommon.TNumber

export type FMultiply = ($: TNumberRange) => mcommon.TNumber

export type FNegate = ($: mcommon.TNumber) => mcommon.TNumber

export type FSubstract = ($: TSubstractData) => mcommon.TNumber