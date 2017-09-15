import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { OkuOgrenci } from './oku-ogrenci.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class OkuOgrenciService {

    private resourceUrl = SERVER_API_URL + 'api/oku-ogrencis';

    constructor(private http: Http) { }

    create(okuOgrenci: OkuOgrenci): Observable<OkuOgrenci> {
        const copy = this.convert(okuOgrenci);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(okuOgrenci: OkuOgrenci): Observable<OkuOgrenci> {
        const copy = this.convert(okuOgrenci);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<OkuOgrenci> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(okuOgrenci: OkuOgrenci): OkuOgrenci {
        const copy: OkuOgrenci = Object.assign({}, okuOgrenci);
        return copy;
    }
}
