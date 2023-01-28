import * as api from "../api"

export const $$: api.CdivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return ['not set', {}]
    }
    return ['set', {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }]

}