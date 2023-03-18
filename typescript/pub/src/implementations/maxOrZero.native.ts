import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.maxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}