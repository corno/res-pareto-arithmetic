import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({}),
        'namespace': {
            'types': types({
                "NumberRange": ['nested', nr()],
                "DivisionData": group({
                    "numerator": member(nr()),
                    "denominator": member(nr()),

                }),
                "DivisionResult": optional(group({
                    "quotient": member(nr()),
                    "remainder": member(nr()),

                })),
                "SubstractData": group({
                    "minuend": member(nr()),
                    "subtrahend": member(nr()),
                }),
                "NumberDictionary": dictionary(nr()),
                "NumberArray": array(nr()),
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "Add": {
                'data': reference("NumberRange"),
                'return value': number()
            },
            "Multiply": {
                'data': reference("NumberRange"),
                'return value': number()
            },
            "Negate": {
                'data': number(),
                'return value': number()
            },
            /**
            * if the denominator is 0, the return value is null
            * (division by 0)
            */
            "DivideWithRemainder": {
                'data': reference("DivisionData"),
                'return value': reference("DivisionResult")
            },
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": {
                'data': reference("NumberArray"),
                'return value': number()
            },
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": {
                'data': reference("NumberDictionary"),
                'return value': number()
            },
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": {
                'data': reference("NumberRange"),
                'return value': number()
            },
            "Substract": {
                'data': reference("SubstractData"),
                'return value': number()
            },
        }),
        'callbacks': d({}),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "add": {
                'definition': ['function', {
                    'function': "Add"
                }],
                'type': ['reference', null],
            },
            "arrayMaxOrZero": {
                'definition': ['function', {
                    'function': "ArrayMaxOrZero"
                }],
                'type': ['reference', null],
            },
            "dictionaryMaxOrZero": {
                'definition': ['function', {
                    'function': "DictionaryMaxOrZero"
                }],
                'type': ['reference', null],
            },
            "divideWithRemainder": {
                'definition': ['function', {
                    'function': "DivideWithRemainder"
                }],
                'type': ['reference', null],
            },
            "maxOrZero": {
                'definition': ['function', {
                    'function': "MaxOrZero"
                }],
                'type': ['reference', null],
            },
            "multiply": {
                'definition': ['function', {
                    'function': "Multiply"
                }],
                'type': ['reference', null],
            },
            "negate": {
                'definition': ['function', {
                    'function': "Negate"
                }],
                'type': ['reference', null],
            },
            "substract": {
                'definition': ['function', {
                    'function': "Substract"
                }],
                'type': ['reference', null],
            },
        })
    },
}