import * as api from "api-pareto-arithmetic"

import * as pi from "pareto-core-internals"

export const multiply: api.Multiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current
}

export const add: api.Add = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}

export const modulo: api.Modulo = ($) => {
    return $.numerator % $.denominator
}

export const substract: api.Substract = ($) => {
    return $.minuend - $.subtrahend
}

export const negative: api.Negative = ($) => {
    return -$
}