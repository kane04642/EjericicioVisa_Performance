import http from 'k6/http';
import * as general_base from '../../../src/general/general.js';
import * as resource from '../../../src/baseURL/buildUrlPostPet.js'; 

const HEADERS = {
    headers: {
        "Content-Type": "application/json"
    }
};

// Function to execute the POST request
export let execute = (data) => {
    const url = `${general_base.base_url_Local}` + resource.buildUrlPostPet();

    return http.post(url, JSON.stringify(data), HEADERS);
};