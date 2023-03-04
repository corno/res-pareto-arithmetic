import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "add": algorithm(functionReference("this", {}, "Add")),
        "arrayMaxOrZero": algorithm(functionReference("this", {}, "ArrayMaxOrZero")),
        "dictionaryMaxOrZero": algorithm(functionReference("this", {}, "DictionaryMaxOrZero")),
        "divideWithRemainder": algorithm(functionReference("this", {}, "DivideWithRemainder")),
        "maxOrZero": algorithm(functionReference("this", {}, "MaxOrZero")),
        "multiply": algorithm(functionReference("this", {}, "Multiply")),
        "negate": algorithm(functionReference("this", {}, "Negate")),
        "substract": algorithm(functionReference("this", {}, "Substract")),
    })
}