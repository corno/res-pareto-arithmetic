import * as pd from 'pareto-core-data'

import {
    array, data, dictionary, externalTypeReference, group, imp, member, nested, number, optional, sfunc,
    type, typeReference
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "Add": sfunc(data(typeReference("NumberRange")), externalTypeReference("common", "Number")),
            "Multiply": sfunc(data(typeReference("NumberRange")), externalTypeReference("common", "Number")),
            "Negate": sfunc(data(externalTypeReference("common", "Number")), externalTypeReference("common", "Number")),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0),
            */
            "DivideWithRemainder": sfunc(data(typeReference("DivisionData")), typeReference("DivisionResult")),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": sfunc(data(typeReference("NumberArray")), externalTypeReference("common", "Number")),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": sfunc(data(typeReference("NumberDictionary")), externalTypeReference("common", "Number")),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": sfunc(data(typeReference("NumberRange")), externalTypeReference("common", "Number")),
            "Substract": sfunc(data(typeReference("SubstractData")), externalTypeReference("common", "Number")),
        }),
    },
}