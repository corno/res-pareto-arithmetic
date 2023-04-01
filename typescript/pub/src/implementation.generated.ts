import { API } from "./api.generated"
import { $$ as iadd } from "./implementations/add.native"
import { $$ as iarrayMaxOrZero } from "./implementations/arrayMaxOrZero.native"
import { $$ as idictionaryMaxOrZero } from "./implementations/dictionaryMaxOrZero.native"
import { $$ as idivideWithRemainder } from "./implementations/divideWithRemainder.native"
import { $$ as iincrement } from "./implementations/increment.native"
import { $$ as imaxOrZero } from "./implementations/maxOrZero.native"
import { $$ as imultiply } from "./implementations/multiply.native"
import { $$ as inegate } from "./implementations/negate.native"
import { $$ as isubstract } from "./implementations/substract.native"

export const $r: API = {
    'add': iadd,
    'arrayMaxOrZero': iarrayMaxOrZero,
    'dictionaryMaxOrZero': idictionaryMaxOrZero,
    'divideWithRemainder': idivideWithRemainder,
    'increment': iincrement,
    'maxOrZero': imaxOrZero,
    'multiply': imultiply,
    'negate': inegate,
    'substract': isubstract,
}