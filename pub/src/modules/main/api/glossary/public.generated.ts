import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TDivisionData = t.UDivisionData

export type TDivisionResult = t.UDivisionResult

export type TNumberArray = t.UNumberArray

export type TNumberDictionary = t.UNumberDictionary

export type TNumberRange = t.UNumberRange

export type TSubstractData = t.USubstractData

export type FAdd = ($: TNumberRange,) => mcommon.TNumber

export type FArrayMaxOrZero = ($: TNumberArray,) => mcommon.TNumber

export type FDictionaryMaxOrZero = ($: TNumberDictionary,) => mcommon.TNumber

export type FDivideWithRemainder = ($: TDivisionData,) => TDivisionResult

export type FMaxOrZero = ($: TNumberRange,) => mcommon.TNumber

export type FMultiply = ($: TNumberRange,) => mcommon.TNumber

export type FNegate = ($: mcommon.TNumber,) => mcommon.TNumber

export type FSubstract = ($: TSubstractData,) => mcommon.TNumber