## PETs

- smoke_test
```
    k6 run -e TYPE_TEST=smoke_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/stepFunction_smoke_test_$(date +%Y%m%d-%H%M%S).log \
      --http-debug="full" \
      src/operadores/services/result/index.js
```

- load_test
```
    k6 run -e TYPE_TEST=load_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/stepFunction_load_test_$(date +%Y%m%d-%H%M%S).log \
      src/operadores/services/result/index.js
```

 - constant_vus
 ```
     k6 run -e TYPE_TEST=constant_vus \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/stepFunction_constant_vus_$(date +%Y%m%d-%H%M%S).log \
      src/operadores/services/result/index.js
```
 - stress_test
 ```
     k6 run -e TYPE_TEST=stress_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/stepFunction_stress_test_$(date +%Y%m%d-%H%M%S).log \
      src/operadores/services/result/index.js
```