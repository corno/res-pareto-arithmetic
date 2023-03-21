import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Add = ($: T.NumberRange) => g_common.T.Number
        }
        
        
        export namespace F {
            export type ArrayMaxOrZero = ($: T.NumberArray) => g_common.T.Number
        }
        
        
        export namespace F {
            export type DictionaryMaxOrZero = ($: T.NumberDictionary) => g_common.T.Number
        }
        
        
        export namespace F {
            export type DivideWithRemainder = ($: T.DivisionData) => T.DivisionResult
        }
        
        
        export namespace F {
            export type MaxOrZero = ($: T.NumberRange) => g_common.T.Number
        }
        
        
        export namespace F {
            export type Multiply = ($: T.NumberRange) => g_common.T.Number
        }
        
        
        export namespace F {
            export type Negate = ($: g_common.T.Number) => g_common.T.Number
        }
        
        
        export namespace F {
            export type Substract = ($: T.SubstractData) => g_common.T.Number
        }
    }
}