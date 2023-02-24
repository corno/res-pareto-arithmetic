import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FAdd = ($: T.NumberRange,) => gcommon.T.Number

export type FArrayMaxOrZero = ($: T.NumberArray,) => gcommon.T.Number

export type FDictionaryMaxOrZero = ($: T.NumberDictionary,) => gcommon.T.Number

export type FDivideWithRemainder = ($: T.DivisionData,) => T.DivisionResult

export type FMaxOrZero = ($: T.NumberRange,) => gcommon.T.Number

export type FMultiply = ($: T.NumberRange,) => gcommon.T.Number

export type FNegate = ($: gcommon.T.Number,) => gcommon.T.Number

export type FSubstract = ($: T.SubstractData,) => gcommon.T.Number