import * as pi from 'pareto-core-internals'

import { CmaxOrZero } from "../api"

export const $$:CmaxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}