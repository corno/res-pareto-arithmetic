import * as pi from 'pareto-core-internals'



import { A } from "../api.generated"

export const $$: A.add = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
