import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as main_add } from "../modules/main/add.generated"
import { test as main_arrayMaxOrZero } from "../modules/main/arrayMaxOrZero.generated"
import { test as main_dictionaryMaxOrZero } from "../modules/main/dictionaryMaxOrZero.generated"
import { test as main_divideWithRemainder } from "../modules/main/divideWithRemainder.generated"
import { test as main_maxOrZero } from "../modules/main/maxOrZero.generated"
import { test as main_multiply } from "../modules/main/multiply.generated"
import { test as main_negate } from "../modules/main/negate.generated"
import { test as main_substract } from "../modules/main/substract.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'main': pr.wrapRawDictionary({
        'add': main_add,
        'arrayMaxOrZero': main_arrayMaxOrZero,
        'dictionaryMaxOrZero': main_dictionaryMaxOrZero,
        'divideWithRemainder': main_divideWithRemainder,
        'maxOrZero': main_maxOrZero,
        'multiply': main_multiply,
        'negate': main_negate,
        'substract': main_substract,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))