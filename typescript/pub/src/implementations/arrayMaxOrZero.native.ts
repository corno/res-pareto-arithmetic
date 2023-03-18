import { A } from "../api.generated"

export const $$: A.arrayMaxOrZero = ($) => {
    let seed = 0
    $.__forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}