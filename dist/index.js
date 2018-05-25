"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=index.js.map