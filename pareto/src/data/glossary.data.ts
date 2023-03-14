import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    imp,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "NumberRange": type(nested(number())),
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
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "Add": sfunc(sdata(typeReference("NumberRange")), sdata(externalTypeReference("common", "Number"))),
            "Multiply": sfunc(sdata(typeReference("NumberRange")), sdata(externalTypeReference("common", "Number"))),
            "Negate": sfunc(sdata(externalTypeReference("common", "Number")), sdata(externalTypeReference("common", "Number"))),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0),
            */
            "DivideWithRemainder": sfunc(sdata(typeReference("DivisionData")), sdata(typeReference("DivisionResult"))),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": sfunc(sdata(typeReference("NumberArray")), sdata(externalTypeReference("common", "Number"))),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": sfunc(sdata(typeReference("NumberDictionary")), sdata(externalTypeReference("common", "Number"))),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": sfunc(sdata(typeReference("NumberRange")), sdata(externalTypeReference("common", "Number"))),
            "Substract": sfunc(sdata(typeReference("SubstractData")), sdata(externalTypeReference("common", "Number"))),
        }),

    }],
}