
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"
import * as g_bool from "res-pareto-boolean"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: number, expected: number) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', g_bool.$r.equal()({ this: actual, that: expected })]
            }]
        })
    }

    createTest("add - empty", g_pub.$r.add()([]), 0)
    createTest("add - entries", g_pub.$r.add()([4, 6, 2]), 12)
    createTest("negative", g_pub.$r.negate()(2), -2)
    pl.cc(g_pub.$r.divideWithRemainder()({ numerator: 7, denominator: 2 }), ($) => {
        if ($[0] === true) {

            createTest("quotient", $[1].quotient, 3)
            createTest("modulo", $[1].remainder, 1)
  
        } else {

            builder.add("unexpected division null", {
                type: ['test', {
                    type: ['boolean', false]
                }]
            })
        }
    })

    builder.add("unexpected division not null", {
        type: ['test', {
            type: ['boolean', g_pub.$r.divideWithRemainder()({ numerator: 7, denominator: 0 })[0] === false]
        }]
    })
    createTest("multiply - empty", g_pub.$r.multiply()([]), 1)
    createTest("multiply - entries", g_pub.$r.multiply()([7, 6]), 42)

    createTest("substract", g_pub.$r.substract()({ minuend: 42, subtrahend: 7 }), 35)

    createTest("max", g_pub.$r.maxOrZero()([42, 6, 8]), 42)
    //createTest("dictionaryMax", pub.$r.dictionaryMaxOrZero(pd.wrapRawDictionary({ "a": 42, "b": 6 })), 42)
    //createTest("arrayMax", pub.$r.arrayMaxOrZero(pr.wrapRawArray([42, 6, 8])), 42)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
