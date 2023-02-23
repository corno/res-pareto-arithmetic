
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import * as mtest from "lib-pareto-test"
import * as mapi from "../api"
import * as mpub from "../../../../../pub"
import * as mbool from "res-pareto-boolean"


export const $$: mapi.CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
    function createTest(name: string, actual: number, expected: number) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', mbool.$a.equal({ this: actual, that: expected })]
            }]
        })
    }

    createTest("add - empty", mpub.$a.add([]), 0)
    createTest("add - entries", mpub.$a.add([4, 6, 2]), 12)
    createTest("negative", mpub.$a.negate(2), -2)
    pl.cc(mpub.$a.divideWithRemainder({ numerator: 7, denominator: 2 }), ($) => {
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
            type: ['boolean', mpub.$a.divideWithRemainder({ numerator: 7, denominator: 0 })[0] === false]
        }]
    })
    createTest("multiply - empty", mpub.$a.multiply([]), 1)
    createTest("multiply - entries", mpub.$a.multiply([7, 6]), 42)

    createTest("substract", mpub.$a.substract({ minuend: 42, subtrahend: 7 }), 35)

    createTest("max", mpub.$a.maxOrZero([42, 6, 8]), 42)
    //createTest("dictionaryMax", pub.$a.dictionaryMaxOrZero(pd.wrapRawDictionary({ "a": 42, "b": 6 })), 42)
    //createTest("arrayMax", pub.$a.arrayMaxOrZero(pr.wrapRawArray([42, 6, 8])), 42)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
