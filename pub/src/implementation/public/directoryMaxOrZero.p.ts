import * as api from "../../api"
import { f_directoryMaxOrZeroImp } from "../private/directoryMaxOrZeroImp.p"

export const f_directoryMaxOrZero: api.FDictionaryMaxOrZero = ($) => {
    return f_directoryMaxOrZeroImp($)

}