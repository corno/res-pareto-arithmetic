import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type add = g_this.F.Add

export type arrayMaxOrZero = g_this.F.ArrayMaxOrZero

export type dictionaryMaxOrZero = g_this.F.DictionaryMaxOrZero

export type divideWithRemainder = g_this.F.DivideWithRemainder

export type maxOrZero = g_this.F.MaxOrZero

export type multiply = g_this.F.Multiply

export type negate = g_this.F.Negate

export type substract = g_this.F.Substract

export type API = {
    add: add
    arrayMaxOrZero: arrayMaxOrZero
    dictionaryMaxOrZero: dictionaryMaxOrZero
    divideWithRemainder: divideWithRemainder
    maxOrZero: maxOrZero
    multiply: multiply
    negate: negate
    substract: substract
}