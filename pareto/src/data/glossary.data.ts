import * as pd from 'pareto-core-data'

import {
    array, data, dictionary, externalTypeReference, group, imp, member, number, optional, sfunction,
    type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "NumberRange": type(array(number())),
            "DivisionData": type(group({
                "numerator": member(number()),
                "denominator": member(number()),
            })),
            "DivisionResult": type(optional(group({
                "quotient": member(number()),
                "remainder": member(number()),

            }))),
            "SubstractData": type(group({
                "minuend": member(number()),
                "subtrahend": member(number()),
            })),
            "NumberDictionary": type(dictionary(number())),
            "NumberArray": type(array(number())),
            "IncrementConfig": type(group({
                "stepsize": member(number())
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Increment": sfunction(externalTypeReference("common", "Number"), data(externalTypeReference("common", "Number"))),
            "Add": sfunction(externalTypeReference("common", "Number"), data(typeReference("NumberRange"))),
            "Multiply": sfunction(externalTypeReference("common", "Number"), data(typeReference("NumberRange"))),
            "Negate": sfunction(externalTypeReference("common", "Number"), data(externalTypeReference("common", "Number"))),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0),
            */
            "DivideWithRemainder": sfunction(typeReference("DivisionResult"), data(typeReference("DivisionData"))),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": sfunction(externalTypeReference("common", "Number"), data(typeReference("NumberArray"))),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": sfunction(externalTypeReference("common", "Number"), data(typeReference("NumberDictionary"))),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": sfunction(externalTypeReference("common", "Number"), data(typeReference("NumberRange"))),
            "Substract": sfunction(externalTypeReference("common", "Number"), data(typeReference("SubstractData"))),
        }),
    },
}