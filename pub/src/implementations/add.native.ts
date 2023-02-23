import * as pi from 'pareto-core-internals'



import { Cadd } from "../api"

export const $$:Cadd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
