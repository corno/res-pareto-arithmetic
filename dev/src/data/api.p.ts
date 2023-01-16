import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
    typeReference,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
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
                'data': typeReference("NumberRange"),
                'return value': externalTypeReference("common", "Number"),
            },
            "Multiply": {
                'data': typeReference("NumberRange"),
                'return value': externalTypeReference("common", "Number"),
            },
            "Negate": {
                'data': externalTypeReference("common", "Number"),
                'return value': externalTypeReference("common", "Number"),
            },
            /**
            * if the denominator is 0, the return value is null
            * (division by 0)
            */
            "DivideWithRemainder": {
                'data': typeReference("DivisionData"),
                'return value': typeReference("DivisionResult")
            },
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": {
                'data': typeReference("NumberArray"),
                'return value': externalTypeReference("common", "Number"),
            },
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": {
                'data': typeReference("NumberDictionary"),
                'return value': externalTypeReference("common", "Number"),
            },
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": {
                'data': typeReference("NumberRange"),
                'return value': externalTypeReference("common", "Number"),
            },
            "Substract": {
                'data': typeReference("SubstractData"),
                'return value': externalTypeReference("common", "Number"),
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