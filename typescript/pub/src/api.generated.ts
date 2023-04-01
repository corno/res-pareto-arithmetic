import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
    
    
}

export namespace A {
    
    export type add = () => g_this.SYNC.A.F.Add
    
    export type arrayMaxOrZero = () => g_this.SYNC.A.F.ArrayMaxOrZero
    
    export type dictionaryMaxOrZero = () => g_this.SYNC.A.F.DictionaryMaxOrZero
    
    export type divideWithRemainder = () => g_this.SYNC.A.F.DivideWithRemainder
    
    export type increment = ($: g_this.T.IncrementConfig, ) => g_this.SYNC.A.F.Increment
    
    export type maxOrZero = () => g_this.SYNC.A.F.MaxOrZero
    
    export type multiply = () => g_this.SYNC.A.F.Multiply
    
    export type negate = () => g_this.SYNC.A.F.Negate
    
    export type substract = () => g_this.SYNC.A.F.Substract
}

export type API = {
    readonly 'add': A.add
    readonly 'arrayMaxOrZero': A.arrayMaxOrZero
    readonly 'dictionaryMaxOrZero': A.dictionaryMaxOrZero
    readonly 'divideWithRemainder': A.divideWithRemainder
    readonly 'increment': A.increment
    readonly 'maxOrZero': A.maxOrZero
    readonly 'multiply': A.multiply
    readonly 'negate': A.negate
    readonly 'substract': A.substract
}