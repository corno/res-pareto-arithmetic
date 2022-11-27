import * as api from "../../api"

import * as pi from "pareto-core-internals"


export const f_directoryMaxOrZeroImp: api.FDictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}