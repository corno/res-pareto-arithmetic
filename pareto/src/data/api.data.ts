import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "add": algorithm(functionReference("this", {}, "Add")),
        "arrayMaxOrZero": algorithm(functionReference("this", {}, "ArrayMaxOrZero")),
        "dictionaryMaxOrZero": algorithm(functionReference("this", {}, "DictionaryMaxOrZero")),
        "divideWithRemainder": algorithm(functionReference("this", {}, "DivideWithRemainder")),
        "maxOrZero": algorithm(functionReference("this", {}, "MaxOrZero")),
        "multiply": algorithm(functionReference("this", {}, "Multiply")),
        "negate": algorithm(functionReference("this", {}, "Negate")),
        "substract": algorithm(functionReference("this", {}, "Substract")),
    }),
}