import { API } from "./api"
import { iadd } from "./implementations/add.p"
import { iarrayMaxOrZero } from "./implementations/arrayMaxOrZero.p"
import { idictionaryMaxOrZero } from "./implementations/dictionaryMaxOrZero.p"
import { idivideWithRemainder } from "./implementations/divideWithRemainder.p"
import { imaxOrZero } from "./implementations/maxOrZero.p"
import { imultiply } from "./implementations/multiply.p"
import { inegate } from "./implementations/negate.p"
import { isubstract } from "./implementations/substract.p"

export * from "./api"

export const $a: API = {
    "add": iadd,
    "arrayMaxOrZero": iarrayMaxOrZero,
    "dictionaryMaxOrZero": idictionaryMaxOrZero,
    "divideWithRemainder": idivideWithRemainder,
    "maxOrZero": imaxOrZero,
    "multiply": imultiply,
    "negate": inegate,
    "substract": isubstract,
}