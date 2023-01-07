import * as pi from "pareto-core-internals"

import * as api from "../api"

export const imultiply: api.Cmultiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current

}