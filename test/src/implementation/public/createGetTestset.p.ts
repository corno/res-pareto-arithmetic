
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"
import * as pw from "pareto-core-raw"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const f_createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: number, expected: number) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: $d.equal({ this: actual, that: expected }),
                    }]
                }]
            })
        }

        createTest("add - empty", pub.f_add([]), 0)
        createTest("add - entries", pub.f_add([4, 6, 2]), 12)
        createTest("negative", pub.f_negative(2), -2)
        const x = pub.f_divideWithRemainder({ numerator: 7, denominator: 2 })
        if (x === null) {
            builder.add("unexpected division null", {
                type: ["test", {
                    type: ["boolean", {
                        test: false,
                    }]
                }]
            })
        } else {
            createTest("quotient", x.quotient, 3)
            createTest("modulo", x.remainder, 1)
        }

        builder.add("unexpected division not null", {
            type: ["test", {
                type: ["boolean", {
                    test: pub.f_divideWithRemainder({ numerator: 7, denominator: 0 }) === null,
                }]
            }]
        })
        createTest("multiply - empty", pub.f_multiply([]), 1)
        createTest("multiply - entries", pub.f_multiply([7, 6]), 42)

        createTest("substract", pub.f_substract({ minuend: 42, subtrahend: 7 }), 35)

        createTest("max", pub.f_maxOrZero([42, 6, 8]), 42)
        createTest("dictionaryMax", pub.f_directoryMaxOrZero(pw.wrapRawDictionary({ "a": 42, "b": 6 })), 42)
        createTest("arrayMax", pub.f_arrayMaxOrZero(pw.wrapRawArray([42, 6, 8])), 42)



        return pa.value({
            elements: builder.getDictionary()
        })
    }
}