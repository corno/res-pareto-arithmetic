import { CarrayMaxOrZero } from "../definition/api.generated"

export const $$:CarrayMaxOrZero = ($) => {
    let seed = 0
    $.__forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}