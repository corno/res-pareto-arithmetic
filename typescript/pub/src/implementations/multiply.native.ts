import * as pi from 'pareto-core-internals'

import { Cmultiply } from "../api"

export const $$:Cmultiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current

}