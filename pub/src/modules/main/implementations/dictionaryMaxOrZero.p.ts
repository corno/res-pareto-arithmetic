import * as api from "../api"

export const idictionaryMaxOrZero: api.CdictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}