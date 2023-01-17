import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type Cadd = glo.FAdd

export type CarrayMaxOrZero = glo.FArrayMaxOrZero

export type CdictionaryMaxOrZero = glo.FDictionaryMaxOrZero

export type CdivideWithRemainder = glo.FDivideWithRemainder

export type CmaxOrZero = glo.FMaxOrZero

export type Cmultiply = glo.FMultiply

export type Cnegate = glo.FNegate

export type Csubstract = glo.FSubstract

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