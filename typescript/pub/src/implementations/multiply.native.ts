import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.multiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current

}