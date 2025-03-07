import http from 'k6/http';
import * as general_base from '../../../src/general/general.js';
import * as resource from '../../baseURL/buildUrlPutPet.js'; 

const HEADERS = {
    headers: {
        "Content-Type": "application/json"
    }
};


export let execute = (data) => {
  
    const url = `${general_base.base_url_Local}` + resource.buildUrlPutPet();
    return http.put(url, JSON.stringify(data), HEADERS);
};