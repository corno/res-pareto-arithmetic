import * as api from "api-pareto-arithmetic"
import { f_negativeImp } from "../private/negativeImp.p"

export const f_negative: api.FNegative = ($) => {
    return f_negativeImp($)
}