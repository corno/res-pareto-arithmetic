import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type Cadd = gthis.FAdd

export type CarrayMaxOrZero = gthis.FArrayMaxOrZero

export type CdictionaryMaxOrZero = gthis.FDictionaryMaxOrZero

export type CdivideWithRemainder = gthis.FDivideWithRemainder

export type CmaxOrZero = gthis.FMaxOrZero

export type Cmultiply = gthis.FMultiply

export type Cnegate = gthis.FNegate

export type Csubstract = gthis.FSubstract

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