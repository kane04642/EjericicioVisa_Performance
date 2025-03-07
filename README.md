VISA Pet exercise
The project directory structure
src + general | Package base general function + pet | Package base Script + get | Package base Script GET service + post | Package base Script POST service + put | Package base Script PUT service + run-commandas | Package with commands to run different types of tests + baseURL | Package build the bases URL

How to run the tests
Open a new terminal in VS
Locate the folder of the script you want to run e.g.: C:Visa\K6 Visa_Pet\src\pet\put
In the file run-commands/RtunCommand.md select the script of the type of test you want to run (load_test or stress_test)
Copy to the terminal and run
########## Examples 1 :
* K6 Visa_Pet\src\pet\put> k6 run -e TEST_TYPE=stress_test index.js 
Result:
     checks.........................: 99.91% 9139 out of 9147
 data_received..................: 4.6 MB 38 kB/s
 data_sent......................: 2.7 MB 23 kB/s
 http_req_blocked...............: avg=22.22µs min=0s med=0s     max=5.9ms   p(90)=0s       p(95)=0s
 http_req_connecting............: avg=11.43µs min=0s med=0s     max=2.3ms   p(90)=0s       p(95)=0s
 http_req_duration..............: avg=2.62ms  min=0s med=2.14ms max=31.77ms p(90)=4.79ms   p(95)=5.9ms
   { expected_response:true }...: avg=2.61ms  min=0s med=2.14ms max=25.79ms p(90)=4.78ms   p(95)=5.89ms
 http_req_failed................: 0.08%  8 out of 9147
 http_req_receiving.............: avg=80.35µs min=0s med=0s     max=2.75ms  p(90)=514.53µs p(95)=590.73µs
 http_req_sending...............: avg=38.3µs  min=0s med=0s     max=7.1ms   p(90)=0s       p(95)=514.16µs
 http_req_tls_handshaking.......: avg=0s      min=0s med=0s     max=0s      p(90)=0s       p(95)=0s
 http_req_waiting...............: avg=2.5ms   min=0s med=2.04ms max=31.2ms  p(90)=4.57ms   p(95)=5.7ms
 http_reqs......................: 9147   75.727551/s
 iteration_duration.............: avg=1s      min=1s med=1s     max=1.03s   p(90)=1.01s    p(95)=1.01s
 iterations.....................: 9147   75.727551/s
 vus............................: 1      min=1            max=100
 http_reqs......................: 9147   75.727551/s
 iteration_duration.............: avg=1s      min=1s med=1s     max=1.03s   p(90)=1.01s    p(95)=1.01s
 iterations.....................: 9147   75.727551/s
 http_reqs......................: 9147   75.727551/s
 iteration_duration.............: avg=1s      min=1s med=1s     max=1.03s   p(90)=1.01s    p(95)=1.01s
 http_reqs......................: 9147   75.727551/s
 iteration_duration.............: avg=1s      min=1s med=1s     max=1.03s   p(90)=1.01s    p(95)=1.01s
 http_reqs......................: 9147   75.727551/s
 iteration_duration.............: avg=1s      min=1s med=1s     max=1.03s   p(90)=1.01s    p(95)=1.01s
 iterations.....................: 9147   75.727551/s
 vus............................: 1      min=1            max=100
 vus_max........................: 100    min=100          max=100
Analysis:********* Checks:

      99.91% of checks passed (9,139 out of 9,147).

      8 checks failed (0.08%). While this failure rate is minimal, it is essential to investigate the root cause to determine if these are sporadic errors or indicative of an underlying issue.

      Data Transferred:

      data_received: 4.6 MB (38 kB/s).

      data_sent: 2.7 MB (23 kB/s).

      These values are relatively low, suggesting that the test did not involve large data volumes, which is typical for API or lightweight service performance tests.

      Response Times (http_req_duration):

      Average (avg): 2.62 ms.

      Minimum (min): 0 ms.

      Maximum (max): 31.77 ms.

      Percentiles:

      p(90): 4.79 ms.

      p(95): 5.9 ms.

      Analysis:

      The average response time is excellent (2.62 ms), indicating that the system responds quickly.

      The p95 (5.9 ms) shows that 95% of requests were completed in less than 6 ms, which is a strong performance indicator.

      The maximum response time of 31.77 ms is an outlier and should be investigated to determine if it is an isolated incident or a recurring pattern.

      Errors (http_req_failed):

      0.08% of requests failed (8 out of 9,147).

      Although the failure rate is low, it is crucial to review logs to identify the cause of these errors (e.g., timeouts, network issues, or server errors).

      HTTP Requests (http_reqs):

      Total requests: 9,147.

      Requests per second (RPS): 75.73.

      This RPS is relatively low for 100 VUs, suggesting that the virtual users did not generate significant load on the system.

      Connection and Wait Times:

      http_req_connecting: Average of 11.43 µs (very low, indicating no connection issues).

      http_req_waiting: Average of 2.5 ms (time the server took to process the request).

      http_req_sending: Average of 38.3 µs (time to send the request).

      http_req_receiving: Average of 80.35 µs (time to receive the response).

      Analysis:

      Connection, sending, and receiving times are minimal, indicating no significant network or latency issues.

      The waiting time (2.5 ms) is the largest component of the response time, suggesting efficient server-side processing.

      Iterations and Duration:

      iterations: 9,147 iterations completed.

      iteration_duration: Average of 1 second (maximum of 1.03 seconds).

      This indicates that each iteration (a complete script execution) took approximately 1 second, consistent with the average response time.

      Virtual Users (VUs):

      vus: 1 (minimum) to 100 (maximum).

      vus_max: 100 (the configured limit).

      The test scaled up to 100 VUs, but the RPS did not increase significantly, suggesting that the system was not under heavy load or that the VUs did not generate sufficient traffic.
**Recommendations:

      * Increase Load: To identify the system's limits, consider increasing the number of VUs or extending the test duration.

      * Investigate Errors: Review logs to identify the cause of the 8 failed requests.

      * Further Optimization: While performance is strong, additional testing under higher loads can help identify potential bottlenecks
########## Examples 2 :
* k6 run -e TEST_TYPE=load_test index.js in POST service

* *******Analysis:**************** 
Checks:

    100.00% of checks passed (4,654 out of 4,654).

    0 checks failed (0.00%). This indicates a flawless execution in terms of checks, which is an excellent result.

    Data Transferred:

    data_received: 2.3 MB (19 kB/s).

    data_sent: 1.4 MB (12 kB/s).

    These values are relatively low, suggesting that the test did not involve large data volumes, which is typical for API or lightweight service performance tests.

    Response Times (http_req_duration):

    Average (avg): 2.48 ms.

    Minimum (min): 0 ms.

    Maximum (max): 28.39 ms.

    Percentiles:

    p(90): 4.35 ms.

    p(95): 5.31 ms.

    Analysis:

    The average response time is excellent (2.48 ms), indicating that the system responds quickly.

    The p95 (5.31 ms) shows that 95% of requests were completed in less than 5.31 ms, which is a strong performance indicator.

    The maximum response time of 28.39 ms is an outlier and should be investigated to determine if it is an isolated incident or a recurring pattern.

    Errors (http_req_failed):

    0.00% of requests failed (0 out of 4,654).

    This is an excellent result, indicating no errors during the test execution.

    HTTP Requests (http_reqs):

    Total requests: 4,654.

    Requests per second (RPS): 38.61.

    This RPS is relatively low for 50 VUs, suggesting that the virtual users did not generate significant load on the system.

    Connection and Wait Times:

    http_req_connecting: Average of 8.36 µs (very low, indicating no connection issues).

    http_req_waiting: Average of 2.36 ms (time the server took to process the request).

    http_req_sending: Average of 39.56 µs (time to send the request).

    http_req_receiving: Average of 78.95 µs (time to receive the response).

    Analysis:

    Connection, sending, and receiving times are minimal, indicating no significant network or latency issues.

    The waiting time (2.36 ms) is the largest component of the response time, suggesting efficient server-side processing.

    Iterations and Duration:

    iterations: 4,654 iterations completed.

    iteration_duration: Average of 1 second (maximum of 1.02 seconds).

    This indicates that each iteration (a complete script execution) took approximately 1 second, consistent with the average response time.

    Virtual Users (VUs):

    vus: 1 (minimum) to 50 (maximum).

    vus_max: 50 (the configured limit).

    The test scaled up to 50 VUs, but the RPS did not increase significantly, suggesting that the system was not under heavy load or that the VUs did not generate sufficient traffic.
**Recommendations: Increase Load: To identify the system's limits, consider increasing the number of VUs or extending the test duration.

  Investigate Outliers: Review the maximum response time of 28.39 ms to determine if it is an isolated incident or a recurring pattern.

  Further Optimization: While performance is strong, additional testing under higher loads can help identify potential bottlenecks.
