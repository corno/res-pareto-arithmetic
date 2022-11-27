import * as api from "../../api"

import { f_addImp } from "../private/addImp.p"

export const f_add: api.FAdd = ($) => {
    return f_addImp($)
}
