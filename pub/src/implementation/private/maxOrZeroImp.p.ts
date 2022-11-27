import * as api from "../../api"

import * as pi from "pareto-core-internals"

export const f_maxOrZeroImp: api.FMaxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}