import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'name': "res-pareto-arithmetic",

    'author': "Corno",
    'description': "a pareto wrapper for arithmetic operations as pareto lacks them",
    'license': "ISC",

    'type': ['resource',  {
        'devDependencies': d({}),
    }],
    'modules': d({
        "main": {
            'definition': api,

        },
    }),
    'main': "main",
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'testdependencies': d({
        "res-pareto-boolean": {},
    }),
}