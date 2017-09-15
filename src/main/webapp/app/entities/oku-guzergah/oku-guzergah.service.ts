import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { OkuGuzergah } from './oku-guzergah.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class OkuGuzergahService {

    private resourceUrl = SERVER_API_URL + 'api/oku-guzergahs';

    constructor(private http: Http) { }

    create(okuGuzergah: OkuGuzergah): Observable<OkuGuzergah> {
        const copy = this.convert(okuGuzergah);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(okuGuzergah: OkuGuzergah): Observable<OkuGuzergah> {
        const copy = this.convert(okuGuzergah);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<OkuGuzergah> {
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

    private convert(okuGuzergah: OkuGuzergah): OkuGuzergah {
        const copy: OkuGuzergah = Object.assign({}, okuGuzergah);
        return copy;
    }
}
