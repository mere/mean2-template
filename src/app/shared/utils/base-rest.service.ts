import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class BaseRestService {

    protected options: RequestOptions;

    constructor(protected http: Http) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.options = new RequestOptions({ headers: headers });
    }

    /**
     * Performs a GET operation against a restful service.
     *
     * @typeparam {T}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     *
     * @return {Observable<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public get<T>(url: string) : Observable<T> {
        return this.http.get(url, this.options)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    /**
     * Performs a POST operation against a restful service.
     *
     * @typeparam {T}   The object type of the request data.
     * @typeparam TR}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     * @param {T}       data    The object to post to the service.
     *
     * @return {Observable<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public post<T, TR>(url: string, data: T) : Observable<TR> {
        let body = JSON.stringify(data);

        return this.http.post(url, body, this.options)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    /**
     * Performs a PUT operation against a restful service.
     *
     * @typeparam {T}   The object type of the request data.
     * @typeparam TR}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     * @param {T}       data    The object to post to the service.
     *
     * @return {Observable<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public put<T, TR>(url: string, data: T) : Observable<TR> {
        let body = JSON.stringify(data);

        return this.http.put(url, body, this.options)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    /**
     * Performs a DELETE operation against a restful service.
     *
     * @typeparam {T}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     *
     * @return {Observable<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public del<T>(url: string) : Observable<T> {
        return this.http.delete(url, this.options)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    /**
     * Extracts the response data from a restful service response.
     *
     * @param {Response}  res     The response from a restful service call.
     *
     * @return {any) The response data in JSON format or the Response object if "isJson" is false.
     */
    private extractData(res: Response) : any {
        return res.json() || { };
    }

    /**
     * Converts an error message into a rejected Promise.
     *
     * @param {any} error   The error text.
     */
    private handleError(error: any) {
        let errMsg = (error.message)
            ? error.message
            : (error.status) ? `${error.status} - ${error.statusText}` : 'Server error';

        return Observable.throw(errMsg);
    }
}
