
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"
import * as gbool from "res-pareto-boolean"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, actual: number, expected: number) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', gbool.$a.equal({ this: actual, that: expected })]
            }]
        })
    }

    createTest("add - empty", gpub.$a.add([]), 0)
    createTest("add - entries", gpub.$a.add([4, 6, 2]), 12)
    createTest("negative", gpub.$a.negate(2), -2)
    pl.cc(gpub.$a.divideWithRemainder({ numerator: 7, denominator: 2 }), ($) => {
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
            type: ['boolean', gpub.$a.divideWithRemainder({ numerator: 7, denominator: 0 })[0] === false]
        }]
    })
    createTest("multiply - empty", gpub.$a.multiply([]), 1)
    createTest("multiply - entries", gpub.$a.multiply([7, 6]), 42)

    createTest("substract", gpub.$a.substract({ minuend: 42, subtrahend: 7 }), 35)

    createTest("max", gpub.$a.maxOrZero([42, 6, 8]), 42)
    //createTest("dictionaryMax", pub.$a.dictionaryMaxOrZero(pd.wrapRawDictionary({ "a": 42, "b": 6 })), 42)
    //createTest("arrayMax", pub.$a.arrayMaxOrZero(pr.wrapRawArray([42, 6, 8])), 42)

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
