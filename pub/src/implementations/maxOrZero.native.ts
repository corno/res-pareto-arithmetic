import * as pi from "pareto-core-internals"

import * as api from "../api"

export const $$: api.CmaxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}