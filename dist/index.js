"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asPromise(data) {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}
exports.asPromise = asPromise;
function successResult(value, message) {
    return { success: true, response: value };
}
exports.successResult = successResult;
function failedResult(value, message) {
    return { success: false, response: value };
}
exports.failedResult = failedResult;
/** Run callback if response is success, else return failed response as is */
function ifSuccess(result, action) {
    return result.success ? action(result.response)
        :
            result; // pass through failed result
}
exports.ifSuccess = ifSuccess;
// similar to ifSuccess but more specialized to fit Promise.then input parameter for short-hand notation
function withValid(action) {
    return (request_result) => ifSuccess(request_result, action);
}
exports.withValid = withValid;
function delayRequestingPromise(blank_function_encapsulated_promise, wait_time_seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blank_function_encapsulated_promise().then(delayed_promise => { resolve(delayed_promise); });
        }, wait_time_seconds * 1000);
    });
}
exports.delayRequestingPromise = delayRequestingPromise;
//# sourceMappingURL=index.js.map