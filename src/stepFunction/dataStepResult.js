module.exports = {
   
    "app-name": "API_PET",
    httpDebug: 'full',
    "parametrization_test": {

        "smoke_test": {
            vus: 3,  // 1 user looping for 1 minute
            duration: '3s',
            thresholds: {
              'http_req_duration': ['p(99)<150000'], // 99% of requests must complete below 1.5s
            },
            tags: {
                stack: 'Result of pet',   // variable de entorno
                layer: 'VISA',   // variable de entorno
                env: 'qa',    // variable de entorno
                service: 'Step Function',
                type_test: 'smoke_test'
            },
        },
        "constant_vus": {
            vus: 100,
            rps: 4,
            duration: '1m',
            tags: {
                stack: 'Result of pet',   // variable de entorno
                layer: 'VISA',   // variable de entorno
                env: 'qa',    // variable de entorno
                service: 'Step Function',
                type_test: 'constant_vus'
            }
        },
        "load_test": {
            stages: [
                    { duration: "10s", target: 5, rps: 5 },
                    { duration: "1m", target: 150,rps: 6 },
                    { duration: "10s", target: 5, rps: 5 }
              ],
              thresholds: {
                'http_req_duration': ['p(99)<150000'], // 99% of requests must complete below 1.5s
                'logged in successfully': ['p(99)<150000'], // 99% of requests must complete below 1.5s
              },
              tags: {
                  stack: 'Result of pet',     // variable de entorno
                  layer: 'VISA',     // variable de entorno
                  env: 'qa',      // variable de entorno
                  service: 'Step Function',
                  type_test: 'load_test'
              }
        },
        "stress_test":{
            stages: [
                { duration: '10s', target: 10, rps: 2 },
                { duration: '10s', target: 0, rps: 4 },
                { duration: '1m', target: 50, rps: 5 },
                { duration: '1m', target: 50, rps: 5 },
                { duration: '10s', target: 10, rps: 5 },
                { duration: '10s', target: 0, rps: 2 }
              ],
            tags: {
                stack: 'Result of PET',
                layer: 'VISA',
                env: 'qa',
                service: 'Step Function',
                type_test: 'stress_test'
            }
        }
    }
}
