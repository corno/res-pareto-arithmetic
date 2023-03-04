

import { dictionaryMaxOrZero } from "../definition/api.generated"

export const $$: dictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}