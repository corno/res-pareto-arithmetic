import * as api from "api-pareto-arithmetic"

import { multiplyImp } from "../private/multiplyImp"

export const multiply: api.FMultiply = ($) => {
    return multiplyImp($)

}