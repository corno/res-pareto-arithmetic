import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type Cadd = gglo.FAdd

export type CarrayMaxOrZero = gglo.FArrayMaxOrZero

export type CdictionaryMaxOrZero = gglo.FDictionaryMaxOrZero

export type CdivideWithRemainder = gglo.FDivideWithRemainder

export type CmaxOrZero = gglo.FMaxOrZero

export type Cmultiply = gglo.FMultiply

export type Cnegate = gglo.FNegate

export type Csubstract = gglo.FSubstract

export type API = {
    add: Cadd
    arrayMaxOrZero: CarrayMaxOrZero
    dictionaryMaxOrZero: CdictionaryMaxOrZero
    divideWithRemainder: CdivideWithRemainder
    maxOrZero: CmaxOrZero
    multiply: Cmultiply
    negate: Cnegate
    substract: Csubstract
}