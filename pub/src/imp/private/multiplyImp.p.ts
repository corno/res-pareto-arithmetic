import * as api from "api-pareto-arithmetic"

import * as pi from "pareto-core-internals"

export const f_multiplyImp: api.FMultiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current
}