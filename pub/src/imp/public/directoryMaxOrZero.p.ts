import * as api from "api-pareto-arithmetic"
import { f_directoryMaxOrZeroImp } from "../private/directoryMaxOrZeroImp.p"

export const f_directoryMaxOrZero: api.FDictionaryMaxOrZero = ($) => {
    return f_directoryMaxOrZeroImp($)

}