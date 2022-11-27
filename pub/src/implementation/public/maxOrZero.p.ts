import * as api from "../../api"

import { f_maxOrZeroImp } from "../private/maxOrZeroImp.p"

export const f_maxOrZero: api.FMaxOrZero = ($) => {
    return f_maxOrZeroImp($)

}