import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace DivisionData {
        
        export type denominator = number
        
        export type numerator = number
    }
    
    export type DivisionData = {
        readonly 'denominator': number
        readonly 'numerator': number
    }
    
    export namespace DivisionResult {
        
        export namespace O {
            
            export type quotient = number
            
            export type remainder = number
        }
        
        export type O = {
            readonly 'quotient': number
            readonly 'remainder': number
        }
    }
    
    export type DivisionResult = [ false ] | [ true, {
        readonly 'quotient': number
        readonly 'remainder': number
    }]
    
    export namespace IncrementConfig {
        
        export type stepsize = number
    }
    
    export type IncrementConfig = {
        readonly 'stepsize': number
    }
    
    export namespace NumberArray {
        
        export type A = number
    }
    
    export type NumberArray = pt.Array<number>
    
    export namespace NumberDictionary {
        
        export type D = number
    }
    
    export type NumberDictionary = pt.Dictionary<number>
    
    export namespace NumberRange {
        
        export type N = number
    }
    
    export type NumberRange = pt.Nested<number>
    
    export namespace SubstractData {
        
        export type minuend = number
        
        export type subtrahend = number
    }
    
    export type SubstractData = {
        readonly 'minuend': number
        readonly 'subtrahend': number
    }
}