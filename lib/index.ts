export interface Result<T> {
    success: boolean,
    message?: string,
    response: T
}

export function asPromise<T>(data: T): Promise<T>{
	return new Promise((resolve, reject) => {
		resolve(data);
	});
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

// similar to ifSuccess but more specialized to fit Promise.then input parameter for short-hand notation
export function withValid<T>(action: (valid_response_value:T) => any): (request_result: Result<T>) => Result<any>{
    return (request_result: Result<T>) => ifSuccess(request_result, action);
}

export function delayRequestingPromise<T>(blank_function_encapsulated_promise: ()=>Promise<T>, wait_time_seconds: number): Promise<T>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            blank_function_encapsulated_promise().then(delayed_promise => { resolve(delayed_promise) });
        }, wait_time_seconds * 1000);
    }); 
}