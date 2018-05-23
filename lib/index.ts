
export interface Result<T> {
    success: boolean,
    message?: string,
    response: T
}

export function successResult(value:any, message?:string): Result<any> {
    return { success: true, response: value };
}

export function failedResult(value:any, message?:string): Result<any> {
    return { success: false, response: value};
}

export function ifSuccess<T>(result: Result<T>, action: (valid_response_value:T) => any){
    return result.success ? action(result.response) 
                          : 
                          result; // pass through failed result
}
