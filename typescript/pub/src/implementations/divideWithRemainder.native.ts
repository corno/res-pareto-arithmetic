import { CdivideWithRemainder } from "../definition/api.generated"

export const $$:CdivideWithRemainder = ($) => {
    if ($.denominator === 0) {
        return [false]
    }
    return [true, {
        quotient: Math.floor($.numerator / $.denominator),
        remainder: $.numerator % $.denominator
    }]

}