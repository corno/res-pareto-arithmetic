import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.increment = ($c) => {
    return ($) => {
        return $ + $c.stepsize
    }
}