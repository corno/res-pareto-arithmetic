import * as api from "../api"

export const $$: api.CdivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return [false]
    }
    return [true, {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }]

}