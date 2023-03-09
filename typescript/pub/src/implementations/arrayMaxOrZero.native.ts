import { arrayMaxOrZero } from "../api.generated"

export const $$: arrayMaxOrZero = ($) => {
    let seed = 0
    $.__forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}