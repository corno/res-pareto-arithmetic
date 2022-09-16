import * as api from "api-pareto-arithmetic"

import * as pi from "pareto-core-internals"

export const f_addImp: api.FAdd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
