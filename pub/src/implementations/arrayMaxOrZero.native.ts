import * as api from "../api"

export const $$: api.CarrayMaxOrZero = ($) => {
    let seed = 0
    $.__forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}