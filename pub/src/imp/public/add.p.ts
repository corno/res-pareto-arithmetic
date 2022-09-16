import * as api from "api-pareto-arithmetic"

import { f_addImp } from "../private/addImp.p"

export const f_add: api.FAdd = ($) => {
    return f_addImp($)
}
