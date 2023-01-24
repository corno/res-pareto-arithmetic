import * as pr from 'pareto-core-raw'
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


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
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
            "Add": _function( typeReference("NumberRange"), externalTypeReference("common", "Number")),
            "Multiply": _function(typeReference("NumberRange"), externalTypeReference("common", "Number")),
            "Negate": _function( externalTypeReference("common", "Number"), externalTypeReference("common", "Number")),
            /**
            * if the denominator is 0, the return value is null
            * (division by 0)
            */
            "DivideWithRemainder": _function( typeReference("DivisionData"), typeReference("DivisionResult")),
            /**
             * calculates the max of an array of numbers. If there are no entries, the result value is 0
             */
            "ArrayMaxOrZero": _function( typeReference("NumberArray"),  externalTypeReference("common", "Number")),
            /**
             * calculates the max of a dictionary of number. If there are no entries, the result value is 0
             */
            "DictionaryMaxOrZero": _function( typeReference("NumberDictionary"), externalTypeReference("common", "Number")),
            /**
            * calculates the max of a range. If there are no entries, the result value is 0
            */
            "MaxOrZero": _function( typeReference("NumberRange"), externalTypeReference("common", "Number")),
            "Substract": _function( typeReference("SubstractData"), externalTypeReference("common", "Number")),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "add": {
                'definition': definitionReference("Add"),
                'type': ['reference', null],
            },
            "arrayMaxOrZero": {
                'definition': definitionReference("ArrayMaxOrZero"),
                'type': ['reference', null],
            },
            "dictionaryMaxOrZero": {
                'definition': definitionReference("DictionaryMaxOrZero"),
                'type': ['reference', null],
            },
            "divideWithRemainder": {
                'definition': definitionReference("DivideWithRemainder"),
                'type': ['reference', null],
            },
            "maxOrZero": {
                'definition': definitionReference("MaxOrZero"),
                'type': ['reference', null],
            },
            "multiply": {
                'definition': definitionReference("Multiply"),
                'type': ['reference', null],
            },
            "negate": {
                'definition': definitionReference("Negate"),
                'type': ['reference', null],
            },
            "substract": {
                'definition': definitionReference("Substract"),
                'type': ['reference', null],
            },
        })
    },
}