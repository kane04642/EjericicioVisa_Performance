import * as postPet from '../post/PostPet.js'; 
import * as globals from '../../../src/general/global.js';
import { check, sleep } from 'k6';
import * as dataStepFunction from '../../../src/baseURL/dataStepResult.js';
import http from 'k6/http';
import exec from 'k6/execution';

// Load configuration from the config.json file
const config = JSON.parse(open('./config.json')); 

const testType = __ENV.TEST_TYPE || 'load_test';

export const options = {
  scenarios: {
    current_test: {
      executor: config[testType].executor,
      startVUs: config[testType].startVUs,
      stages: config[testType].stages,
      gracefulRampDown: config[testType].gracefulRampDown,
      exec: 'default',
    },
  },
};

// Load the JSON file containing multiple pets
const pets = JSON.parse(open('./pet.json')); 

function getPet(index) {
    if (index >= 0 && index < pets.length) {
        return pets[index];
    }
    throw new Error(`Invalid pet index: ${index}`);
}

export function setup() {
    globals.headersLogs();
}

export default function () {
    const petIndex = __VU % pets.length; 
    const petData = getPet(petIndex);

    let res = postPet.execute(petData);

    check(res, {
        'status is 200': r => r.status === 200,
    });

    sleep(1);

    globals.logged(__VU, __ITER, res);
}

export function teardown(data) {
}