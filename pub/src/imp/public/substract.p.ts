import * as api from "api-pareto-arithmetic"
import { f_substractImp } from "../private/substractImp.p"

export const f_substract: api.FSubstract = ($) => {
    return f_substractImp($)
}
