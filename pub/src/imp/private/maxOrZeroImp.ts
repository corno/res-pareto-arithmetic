import * as api from "api-pareto-arithmetic"

import * as pi from "pareto-core-internals"

export const maxOrZeroImp: api.FMaxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}