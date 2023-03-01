import { CarrayMaxOrZero } from "../api"

export const $$:CarrayMaxOrZero = ($) => {
    let seed = 0
    $.__forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}