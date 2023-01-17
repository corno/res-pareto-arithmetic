import { API } from "./api"
import { $$ as iadd } from "./implementations/add.p"
import { $$ as iarrayMaxOrZero } from "./implementations/arrayMaxOrZero.p"
import { $$ as idictionaryMaxOrZero } from "./implementations/dictionaryMaxOrZero.p"
import { $$ as idivideWithRemainder } from "./implementations/divideWithRemainder.p"
import { $$ as imaxOrZero } from "./implementations/maxOrZero.p"
import { $$ as imultiply } from "./implementations/multiply.p"
import { $$ as inegate } from "./implementations/negate.p"
import { $$ as isubstract } from "./implementations/substract.p"

export * from "./api"

export const $a: API = {
    'add': iadd,
    'arrayMaxOrZero': iarrayMaxOrZero,
    'dictionaryMaxOrZero': idictionaryMaxOrZero,
    'divideWithRemainder': idivideWithRemainder,
    'maxOrZero': imaxOrZero,
    'multiply': imultiply,
    'negate': inegate,
    'substract': isubstract,
}