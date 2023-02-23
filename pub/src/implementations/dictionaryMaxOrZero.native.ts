

import { CdictionaryMaxOrZero } from "../api"

export const $$:CdictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}