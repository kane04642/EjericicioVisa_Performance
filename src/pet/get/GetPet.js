import http from 'k6/http'
import * as general_base from '../../src/general/general.js'
import * as resource from '../../src/stepFunction/buildUrlGetPet.js'

const HEADERS = {
    headers: {
        "Content-Type": "application/json"
    }
}
export let execute = (data)=> {

    const url = `${general_base.base_url}` + resource.buildUrlGetPet()

    return http.get( url,
        HEADERS
    )

}