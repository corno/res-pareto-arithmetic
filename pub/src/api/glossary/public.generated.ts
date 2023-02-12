import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FAdd = ($: T.NumberRange,) => mcommon.T.Number

export type FArrayMaxOrZero = ($: T.NumberArray,) => mcommon.T.Number

export type FDictionaryMaxOrZero = ($: T.NumberDictionary,) => mcommon.T.Number

export type FDivideWithRemainder = ($: T.DivisionData,) => T.DivisionResult

export type FMaxOrZero = ($: T.NumberRange,) => mcommon.T.Number

export type FMultiply = ($: T.NumberRange,) => mcommon.T.Number

export type FNegate = ($: mcommon.T.Number,) => mcommon.T.Number

export type FSubstract = ($: T.SubstractData,) => mcommon.T.Number