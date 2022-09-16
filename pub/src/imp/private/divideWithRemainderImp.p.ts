import * as api from "api-pareto-arithmetic"

export const f_divideWithRemainderImp: api.FDivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return null
    }
    return {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }
}