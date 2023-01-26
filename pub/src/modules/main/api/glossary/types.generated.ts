import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GDivisionData {}
export type GDivisionData = {
    readonly 'denominator': number
    readonly 'numerator': number
}
export type UDivisionData = GDivisionData

export namespace GDivisionResult {
    
    export namespace O {}
    export type O = {
        readonly 'quotient': number
        readonly 'remainder': number
    }
}
export type GDivisionResult = null | GDivisionResult.O
export type UDivisionResult = GDivisionResult

export namespace GNumberArray {}
export type GNumberArray = pt.Array<number>
export type UNumberArray = GNumberArray

export namespace GNumberDictionary {}
export type GNumberDictionary = pt.Dictionary<number>
export type UNumberDictionary = GNumberDictionary

export namespace GNumberRange {}
export type GNumberRange = pt.Nested<number>
export type UNumberRange = GNumberRange

export namespace GSubstractData {}
export type GSubstractData = {
    readonly 'minuend': number
    readonly 'subtrahend': number
}
export type USubstractData = GSubstractData