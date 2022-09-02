
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"
import * as bool from "api-pareto-boolean"

import * as pub from "../../../pub"

export type Dependencies = {
    equal: bool.Equal
}

export function createGetTestSet($d: Dependencies): test.GetTestSet {
    return () => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, actual: number, expected: number) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: $d.equal({ this: actual, that: expected }),
                    }]
                }]
            })
        }

        createTest("add - empty", pub.add([]), 0)
        createTest("add - entries", pub.add([4, 6, 2]), 12)
        createTest("negative", pub.negative(2), -2)
        createTest("modulo", pub.modulo({numerator: 7, denominator: 2}), 1)
        createTest("multiply - empty", pub.multiply([]), 1)
        createTest("multiply - entries", pub.multiply([7, 6]), 42)

        createTest("substract", pub.substract({minuend: 42, subtrahend: 7}), 35)

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}