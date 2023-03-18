import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type add = g_this.SYNC.F.Add
    
    export type arrayMaxOrZero = g_this.SYNC.F.ArrayMaxOrZero
    
    export type dictionaryMaxOrZero = g_this.SYNC.F.DictionaryMaxOrZero
    
    export type divideWithRemainder = g_this.SYNC.F.DivideWithRemainder
    
    export type maxOrZero = g_this.SYNC.F.MaxOrZero
    
    export type multiply = g_this.SYNC.F.Multiply
    
    export type negate = g_this.SYNC.F.Negate
    
    export type substract = g_this.SYNC.F.Substract
}

export type API = {
    add: A.add
    arrayMaxOrZero: A.arrayMaxOrZero
    dictionaryMaxOrZero: A.dictionaryMaxOrZero
    divideWithRemainder: A.divideWithRemainder
    maxOrZero: A.maxOrZero
    multiply: A.multiply
    negate: A.negate
    substract: A.substract
}