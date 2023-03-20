

import { A } from "../api.generated"

export const $$: A.dictionaryMaxOrZero = () => {
    return ($) => {
        let seed = 0
        $.map(($) => {
            seed = Math.max(seed, $)
        })
        return seed
    }
}