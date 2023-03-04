import * as pi from 'pareto-core-internals'

import { multiply } from "../definition/api.generated"

export const $$: multiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current

}