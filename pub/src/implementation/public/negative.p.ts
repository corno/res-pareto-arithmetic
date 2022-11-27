import * as api from "../../api"
import { f_negativeImp } from "../private/negativeImp.p"

export const f_negative: api.FNegative = ($) => {
    return f_negativeImp($)
}