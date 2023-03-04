import * as pi from 'pareto-core-internals'



import { add } from "../definition/api.generated"

export const $$: add = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}
