import * as api from "api-pareto-arithmetic"
import { f_arrayMaxOrZeroImp } from "../private/arrayMaxOrZeroImp.p"

export const f_arrayMaxOrZero: api.FArrayMaxOrZero = ($) => {
    return f_arrayMaxOrZeroImp($)

}