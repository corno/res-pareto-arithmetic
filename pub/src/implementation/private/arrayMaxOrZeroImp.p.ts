import * as api from "../../api"

import * as pi from "pareto-core-internals"

export const f_arrayMaxOrZeroImp: api.FArrayMaxOrZero = ($) => {
    let seed = 0
    $.forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}