import * as pi from 'pareto-core-internals'

import { maxOrZero } from "../api.generated"

export const $$: maxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}