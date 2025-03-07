import http from 'k6/http'

export function buildUrlGetPet(){

    const resource_get = "api/v3/pet/10";
    return resource_get

  }