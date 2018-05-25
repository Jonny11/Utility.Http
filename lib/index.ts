export interface Result<T> {
    success: boolean,
    message?: string,
    response: T
}

export function successResult<T>(value:T, message?:string): Result<T> {
    return { success: true, response: value };
}

export function failedResult<T>(value:T, message?:string): Result<T> {
    return { success: false, response: value};
}

/** Run callback if response is success, else return failed response as is */
export function ifSuccess<T>(result: Result<T>, action: (valid_response_value:T) => any): Result<any>{
    return result.success ? action(result.response) 
                          : 
                          result; // pass through failed result
}
