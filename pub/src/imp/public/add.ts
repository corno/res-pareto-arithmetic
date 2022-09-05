import * as api from "api-pareto-arithmetic"

import { addImp } from "../private/addImp"

export const add: api.FAdd = ($) => {
    return addImp($)
}
