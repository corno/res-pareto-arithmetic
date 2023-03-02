import * as pi from 'pareto-core-internals'



import { Cadd } from "../definition/api.generated"

export const $$:Cadd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
