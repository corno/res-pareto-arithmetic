import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
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
}