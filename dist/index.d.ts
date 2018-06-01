export interface Result<T> {
    success: boolean;
    message?: string;
    response: T;
}
export declare function asPromise<T>(data: T): Promise<T>;
export declare function successResult<T>(value: T, message?: string): Result<T>;
export declare function failedResult<T>(value: T, message?: string): Result<T>;
/** Run callback if response is success, else return failed response as is */
export declare function ifSuccess<T>(result: Result<T>, action: (valid_response_value: T) => any): Result<any>;
export declare function withValid<T>(action: (valid_response_value: T) => any): (request_result: Result<T>) => Result<any>;
export declare function delayRequestingPromise<T>(blank_function_encapsulated_promise: () => Promise<T>, wait_time_seconds: number): Promise<T>;
