import { Http, Headers, RequestOptions, Response } from '@angular/http';


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
     * @return {Promise<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public get<T>(url: string) : Promise<T> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    /**
     * Performs a POST operation against a restful service.
     *
     * @typeparam {T}   The object type of the request data.
     * @typeparam TR}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     * @param {T}       data    The object to post to the service.
     *
     * @return {Promise<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public post<T, TR>(url: string, data: T) : Promise<TR> {
        let body = JSON.stringify(data);

        return this.http.post(url, body, this.options)
            .toPromise()
            .then(response => response.json() as TR)
            .catch(this.handleError);
    }

    /**
     * Performs a PUT operation against a restful service.
     *
     * @typeparam {T}   The object type of the request data.
     * @typeparam TR}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     * @param {T}       data    The object to post to the service.
     *
     * @return {Promise<T>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public put<T, TR>(url: string, data: T) : Promise<TR> {
        let body = JSON.stringify(data);

        return this.http.put(url, body, this.options)
            .toPromise()
            .then(response => response.json() as TR)
            .catch(this.handleError);
    }

    /**
     * Performs a DELETE operation against a restful service.
     *
     * @typeparam {T}   The object type of the response data.
     * @param {string}  url     The url of the rest enpoint to call.
     *
     * @return {Promise<any>} An observable to the response status and data.
     * @throws {Error} An error object if a bad HTTP status is detected.
     */
    public delete(url: string) : Promise<any> {
        return this.http.delete(url, this.options)
            .toPromise()
            .catch(this.handleError);
    }

    /**
     * Converts an error message into a rejected Promise.
     *
     * @param {any} error   The error text.
     */
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
