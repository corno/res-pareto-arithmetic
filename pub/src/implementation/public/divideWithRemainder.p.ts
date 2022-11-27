import * as api from "../../api"

import { f_divideWithRemainderImp } from "../private/divideWithRemainderImp.p"

export const f_divideWithRemainder: api.FDivideWithRemainder = ($) => {
    return f_divideWithRemainderImp($)

}