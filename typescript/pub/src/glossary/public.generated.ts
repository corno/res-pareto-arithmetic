import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace F {
    
    export type Add = ($: T.NumberRange) => g_common.T.Number
    
    export type ArrayMaxOrZero = ($: T.NumberArray) => g_common.T.Number
    
    export type DictionaryMaxOrZero = ($: T.NumberDictionary) => g_common.T.Number
    
    export type DivideWithRemainder = ($: T.DivisionData) => T.DivisionResult
    
    export type MaxOrZero = ($: T.NumberRange) => g_common.T.Number
    
    export type Multiply = ($: T.NumberRange) => g_common.T.Number
    
    export type Negate = ($: g_common.T.Number) => g_common.T.Number
    
    export type Substract = ($: T.SubstractData) => g_common.T.Number
}