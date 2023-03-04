import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
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
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "Add": func(typeReference("NumberRange"), null, null, data(typeReference("common", "Number"), false)),
        "Multiply": func(typeReference("NumberRange"), null, null, data(typeReference("common", "Number"), false)),
        "Negate": func(typeReference("common", "Number"), null, null, data(typeReference("common", "Number"), false)),
        /**
        * if the denominator is 0, the return value is null
        * (division by 0)
        */
        "DivideWithRemainder": func(typeReference("DivisionData"), null, null, data(typeReference("DivisionResult"), false)),
        /**
         * calculates the max of an array of numbers. If there are no entries, the result value is 0
         */
        "ArrayMaxOrZero": func(typeReference("NumberArray"), null, null, data(typeReference("common", "Number"), false)),
        /**
         * calculates the max of a dictionary of number. If there are no entries, the result value is 0
         */
        "DictionaryMaxOrZero": func(typeReference("NumberDictionary"), null, null, data(typeReference("common", "Number"), false)),
        /**
        * calculates the max of a range. If there are no entries, the result value is 0
        */
        "MaxOrZero": func(typeReference("NumberRange"), null, null, data(typeReference("common", "Number"), false)),
        "Substract": func(typeReference("SubstractData"), null, null, data(typeReference("common", "Number"), false)),
    }),
}