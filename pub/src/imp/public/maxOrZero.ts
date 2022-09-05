import * as api from "api-pareto-arithmetic"

import { maxOrZeroImp } from "../private/maxOrZeroImp"

export const maxOrZero: api.FMaxOrZero = ($) => {
    return maxOrZeroImp($)

}