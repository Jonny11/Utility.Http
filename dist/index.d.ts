export interface Result<T> {
    success: boolean;
    message?: string;
    response: T;
}
export declare function successResult<T>(value: T, message?: string): Result<T>;
export declare function failedResult<T>(value: T, message?: string): Result<T>;
/** Run callback if response is success, else return failed response as is */
export declare function ifSuccess<T>(result: Result<T>, action: (valid_response_value: T) => any): Result<any>;
