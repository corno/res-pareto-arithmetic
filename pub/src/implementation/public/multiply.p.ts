import * as api from "../../api"

import { f_multiplyImp } from "../private/multiplyImp.p"

export const f_multiply: api.FMultiply = ($) => {
    return f_multiplyImp($)

}