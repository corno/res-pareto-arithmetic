import * as api from "../api"

export const idivideWithRemainder: api.CdivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return null
    }
    return {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }

}