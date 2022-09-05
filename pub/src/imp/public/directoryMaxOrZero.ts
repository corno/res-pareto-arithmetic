import * as api from "api-pareto-arithmetic"
import { directoryMaxOrZeroImp } from "../private/directoryMaxOrZeroImp"

export const directoryMaxOrZero: api.FDictionaryMaxOrZero = ($) => {
    return directoryMaxOrZeroImp($)

}