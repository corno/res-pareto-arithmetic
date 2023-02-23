import * as mapi from "../api"

export const $$: mapi.CdictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}