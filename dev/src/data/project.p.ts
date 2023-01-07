import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    _null as nll,
    reference as ref,
    boolean as bln,
    number as nr,
    array,
    optional,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, _null, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    resource: true,
    modules: wd({
        "main": {
            definition: {
                "glossary": {
                    'imports': wd({
                    }),
                    'types': types({
                        "NumberRange": ["nested", nr()],
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
                    'functions': wd({
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
                        // // "Negate": {
                        // //     'data': number(),
                        // //     'return value': number()
                        // // },

                        // // export type FAdd = pt.Function<TNumberRange, number>

                        // // export type FMultiply = pt.Function<TNumberRange, number>

                        // // export type FNegative = pt.Function<number, number>


                        // // export type FDivideWithRemainder = pt.Function<
                        // //     {

                        // //     }
                        // // >

                        // // export type FSubstract = pt.Function<
                        // //     {
                        // //         readonly "minuend": number
                        // //         readonly "subtrahend": number
                        // //     },
                        // //     number
                        // // >



                        // // export type FMaxOrZero = pt.Function<
                        // //     pt.Nested<number>,
                        // //     number
                        // // >



                        // // export type FDictionaryMaxOrZero = pt.Function<
                        // //     pt.Dictionary<number>,
                        // //     number
                        // // >


                        // // export type FArrayMaxOrZero = pt.Function<
                        // //     pt.Array<number>,
                        // //     number
                        // // >


                    }),
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                },
                "api": {
                    "imports": wd({
                        // "main": "glo-pareto-main",
                    }),
                    "algorithms": wd({
                        "add": ["algorithm", {
                            type: ["function", {
                                'function': "Add"
                            }],
                        }],
                        "arrayMaxOrZero": ["algorithm", {
                            type: ["function", {
                                'function': "ArrayMaxOrZero"
                            }],
                        }],
                        "dictionaryMaxOrZero": ["algorithm", {
                            type: ["function", {
                                'function': "DictionaryMaxOrZero"
                            }],
                        }],
                        "divideWithRemainder": ["algorithm", {
                            type: ["function", {
                                'function': "DivideWithRemainder"
                            }],
                        }],
                        "maxOrZero": ["algorithm", {
                            type: ["function", {
                                'function': "MaxOrZero"
                            }],
                        }],
                        "multiply": ["algorithm", {
                            type: ["function", {
                                'function': "Multiply"
                            }],
                        }],
                        "negate": ["algorithm", {
                            type: ["function", {
                                'function': "Negate"
                            }],
                        }],
                        "substract": ["algorithm", {
                            type: ["function", {
                                'function': "Substract"
                            }],
                        }],
                    })
                },
            },
            implementation: {}

        },
    }),
    main: "main"
}