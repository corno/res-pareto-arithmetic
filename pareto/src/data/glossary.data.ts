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
            "Add": sfunc(typeReference("NumberRange"), null, null, sdata(externalTypeReference("common", "Number"))),
            "Multiply": sfunc(typeReference("NumberRange"), null, null, sdata(externalTypeReference("common", "Number"))),
            "Negate": sfunc(externalTypeReference("common", "Number"), null, null, sdata(externalTypeReference("common", "Number"))),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0),
            */
            "DivideWithRemainder": sfunc(typeReference("DivisionData"), null, null, sdata(typeReference("DivisionResult"))),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": sfunc(typeReference("NumberArray"), null, null, sdata(externalTypeReference("common", "Number"))),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": sfunc(typeReference("NumberDictionary"), null, null, sdata(externalTypeReference("common", "Number"))),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": sfunc(typeReference("NumberRange"), null, null, sdata(externalTypeReference("common", "Number"))),
            "Substract": sfunc(typeReference("SubstractData"), null, null, sdata(externalTypeReference("common", "Number"))),
        }),

    }],
}