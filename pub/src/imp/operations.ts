import * as api from "api-pareto-arithmetic"

import * as pi from "pareto-core-internals"

export const multiply: api.FMultiply = ($) => {
    let current = 1
    pi.flatten($).forEach(($) => {
        current *= $
    })
    return current
}

export const add: api.FAdd = ($) => {
    let current = 0
    pi.flatten($).forEach(($) => {
        current += $
    })
    return current
}

export const divideWithRemainder: api.FDivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return null
    }
    return {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }
}

export const substract: api.FSubstract = ($) => {
    return $.minuend - $.subtrahend
}

export const negative: api.FNegative = ($) => {
    return -$
}

export const directoryMaxOrZero: api.FDictionaryMaxOrZero = ($) => {
    let seed = 0
    $.map(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}

export const maxOrZero: api.FMaxOrZero = ($) => {
    let seed = 0
    pi.flatten($).forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}

export const arrayMaxOrZero: api.FArrayMaxOrZero = ($) => {
    let seed = 0
    $.forEach(($) => {
        seed = Math.max(seed, $)
    })
    return seed
}