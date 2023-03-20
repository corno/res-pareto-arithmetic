import * as pd from 'pareto-core-data'

import {  algorithm, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "add": algorithm(sfunction("this", {}, "Add"), {}),
        "arrayMaxOrZero": algorithm(sfunction("this", {}, "ArrayMaxOrZero")),
        "dictionaryMaxOrZero": algorithm(sfunction("this", {}, "DictionaryMaxOrZero")),
        "divideWithRemainder": algorithm(sfunction("this", {}, "DivideWithRemainder")),
        "maxOrZero": algorithm(sfunction("this", {}, "MaxOrZero")),
        "multiply": algorithm(sfunction("this", {}, "Multiply")),
        "negate": algorithm(sfunction("this", {}, "Negate")),
        "substract": algorithm(sfunction("this", {}, "Substract")),
    }),
}