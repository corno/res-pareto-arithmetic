import * as api from "api-pareto-arithmetic"

import { divideWithRemainderImp } from "../private/divideWithRemainderImp"

export const divideWithRemainder: api.FDivideWithRemainder = ($) => {
    return divideWithRemainderImp($)

}