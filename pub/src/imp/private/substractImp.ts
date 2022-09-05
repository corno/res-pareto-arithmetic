import * as api from "api-pareto-arithmetic"

export const substractImp: api.FSubstract = ($) => {
    return $.minuend - $.subtrahend
}
