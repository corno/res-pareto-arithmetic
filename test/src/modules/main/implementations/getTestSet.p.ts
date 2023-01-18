
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pw from 'pareto-core-raw'

import * as test from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub/dist"
import * as bool from "res-pareto-boolean"


export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest(name: string, actual: number, expected: number) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', bool.$a.equal({ this: actual, that: expected })]
            }]
        })
    }

    createTest("add - empty", pub.$a.add([]), 0)
    createTest("add - entries", pub.$a.add([4, 6, 2]), 12)
    createTest("negative", pub.$a.negate(2), -2)
    const x = pub.$a.divideWithRemainder({ numerator: 7, denominator: 2 })
    if (x === null) {
        builder.add("unexpected division null", {
            type: ['test', {
                type: ['boolean', false]
            }]
        })
    } else {
        createTest("quotient", x.quotient, 3)
        createTest("modulo", x.remainder, 1)
    }

    builder.add("unexpected division not null", {
        type: ['test', {
            type: ['boolean', pub.$a.divideWithRemainder({ numerator: 7, denominator: 0 }) === null]
        }]
    })
    createTest("multiply - empty", pub.$a.multiply([]), 1)
    createTest("multiply - entries", pub.$a.multiply([7, 6]), 42)

    createTest("substract", pub.$a.substract({ minuend: 42, subtrahend: 7 }), 35)

    createTest("max", pub.$a.maxOrZero([42, 6, 8]), 42)
    createTest("dictionaryMax", pub.$a.dictionaryMaxOrZero(pw.wrapRawDictionary({ "a": 42, "b": 6 })), 42)
    createTest("arrayMax", pub.$a.arrayMaxOrZero(pw.wrapRawArray([42, 6, 8])), 42)



    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}
