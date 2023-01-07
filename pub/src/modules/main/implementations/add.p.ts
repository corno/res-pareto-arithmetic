import * as pi from "pareto-core-internals"

import * as api from "../api"

export const iadd: api.Cadd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
