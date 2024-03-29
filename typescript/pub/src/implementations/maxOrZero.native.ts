import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.maxOrZero = () => {
    return ($) => {
        let seed = 0
        $.__forEach(($) => {
            seed = Math.max(seed, $)
        })
        return seed
    }
}