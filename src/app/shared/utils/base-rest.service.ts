import { Http, Headers, Response } from '@angular/http';


export class BaseRestService {

    protected options: any;

    constructor(protected http: Http) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.options = { headers: headers };
    }

    /**
     * Performs a GET operation against a restful service.
     *
     * @typeparam {T}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     *
     * @return {Promise<T>} A Promise to the response status and data.
     */
    public get<T>(url: string) : Promise<T> {
        return this.http.get(url, this.options)
            .toPromise()
            .then(res => BaseRestService.extractData(res))
            .catch(error => BaseRestService.handleError(error));
    }

    /**
     * Performs a POST operation against a restful service.
     *
     * @typeparam {T}   The object type of the request data.
     * @typeparam TR}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     * @param {T}       data    The object to post to the service.
     *
     * @return {Promise<TR>} A Promise to the response status and data.
     */
    public post<T, TR>(url: string, data: T) : Promise<TR> {
        var body = JSON.stringify(data);

        return this.http.post(url, body, this.options)
            .toPromise()
            .then(res => BaseRestService.extractData(res))
            .catch(error => BaseRestService.handleError(error));
    }

    /**
     * Extracts the response data from a restful service response.
     *
     * @param {Response}  res     The response from a restful service call.
     *
     * @throws {Error} An error object if a bad HTTP status is detected.
     * @return {any) The response data in JSON format or the Response object if "isJson" is false.
     */
    protected static extractData(res: Response) : any {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        return res.json();
    }

    /**
     * Converts an error message into a rejected Promise.
     *
     * @param {any} error   The error text.
     *
     * @return {Promise) The rejected promise.
     */
    protected static handleError(error: any) {
        var errMsg = error.message || 'Server error';
        return Promise.reject(errMsg);
    }
}
