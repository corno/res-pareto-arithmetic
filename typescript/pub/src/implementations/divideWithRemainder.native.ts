import { divideWithRemainder } from "../definition/api.generated"

export const $$: divideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return [false]
    }
    return [true, {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }]

}