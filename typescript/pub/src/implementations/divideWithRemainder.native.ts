import { A } from "../api.generated"

export const $$: A.divideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return [false]
    }
    return [true, {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }]

}