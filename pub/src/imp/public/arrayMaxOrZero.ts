import * as api from "api-pareto-arithmetic"
import { arrayMaxOrZeroImp } from "../private/arrayMaxOrZeroImp"

export const arrayMaxOrZero: api.FArrayMaxOrZero = ($) => {
    return arrayMaxOrZeroImp($)

}