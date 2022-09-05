import * as api from "api-pareto-arithmetic"
import { substractImp } from "../private/substractImp"

export const substract: api.FSubstract = ($) => {
    return substractImp($)
}
