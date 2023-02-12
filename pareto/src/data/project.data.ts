import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "a pareto wrapper for arithmetic operations as pareto lacks them",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-boolean": {},
            }),
        }
    }],
}