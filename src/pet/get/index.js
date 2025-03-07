import * as getPet from '../get/GetPet.js'
import * as globals from '../../../src/general/global.js'
import { check, group, sleep, fail } from 'k6';
import * as dataStepFunction from '../../../src/stepFunction/dataStepResult.js'
export let options = dataStepFunction.parametrization_test[__ENV.TYPE_TEST]

export function setup(){
    globals.headersLogs();
}

export default function (){
    let res = getPet.execute()

    check(res, {
        'status is 200': r => r.status === 200 
    }    )
    sleep(1)
    globals.logged(__VU, __ITER, res);
}

export function teardown(data) {
}