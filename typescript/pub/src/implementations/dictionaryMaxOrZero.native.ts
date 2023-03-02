

import { CdictionaryMaxOrZero } from "../definition/api.generated"

export const $$:CdictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}