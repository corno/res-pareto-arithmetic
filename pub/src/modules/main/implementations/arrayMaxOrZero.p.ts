import * as api from "../api"

export const iarrayMaxOrZero: api.CarrayMaxOrZero = ($) => {
    let seed = 0
    $.forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed

}