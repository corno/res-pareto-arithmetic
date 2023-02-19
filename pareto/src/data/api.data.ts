import * as pd from 'pareto-core-data'
import {
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, number, data, func, type, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
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
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "add": algorithm(definitionReference("Add")),
            "arrayMaxOrZero": algorithm(definitionReference("ArrayMaxOrZero")),
            "dictionaryMaxOrZero": algorithm(definitionReference("DictionaryMaxOrZero")),
            "divideWithRemainder": algorithm(definitionReference("DivideWithRemainder")),
            "maxOrZero": algorithm(definitionReference("MaxOrZero")),
            "multiply": algorithm(definitionReference("Multiply")),
            "negate": algorithm(definitionReference("Negate")),
            "substract": algorithm(definitionReference("Substract")),
        })
    },
}