import * as api from "api-pareto-arithmetic"
import { negativeImp } from "../private/negativeImp"

export const negative: api.FNegative = ($) => {
    return negativeImp($)
}