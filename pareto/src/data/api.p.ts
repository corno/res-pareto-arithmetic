import * as pr from 'pareto-core-raw'
import {
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, _function, number, parameter, template,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "NumberRange": nested(number()),
            "DivisionData": group({
                "numerator": member(number()),
                "denominator": member(number()),

            }),
            "DivisionResult": template("Optional", {
                "Type": group({
                    "quotient": member(number()),
                    "remainder": member(number()),
    
                })
            }),
            "SubstractData": group({
                "minuend": member(number()),
                "subtrahend": member(number()),
            }),
            "NumberDictionary": dictionary(number()),
            "NumberArray": array(number()),
        }),
        'interfaces': d({}),
        'functions': d({
            "Add": _function(typeReference("NumberRange"), typeReference("common", "Number")),
            "Multiply": _function(typeReference("NumberRange"), typeReference("common", "Number")),
            "Negate": _function(typeReference("common", "Number"), typeReference("common", "Number")),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0)
            */
            "DivideWithRemainder": _function(typeReference("DivisionData"), typeReference("DivisionResult")),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": _function(typeReference("NumberArray"), typeReference("common", "Number")),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": _function(typeReference("NumberDictionary"), typeReference("common", "Number")),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": _function(typeReference("NumberRange"), typeReference("common", "Number")),
            "Substract": _function(typeReference("SubstractData"), typeReference("common", "Number")),
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