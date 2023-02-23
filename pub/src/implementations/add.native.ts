import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

export const $$: mapi.Cadd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
