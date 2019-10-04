import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { CotarModel } from 'src/app/models/cotar-model';


@Injectable({
    providedIn: 'root',
})
export class CotacaoApiService {
    private url = environment.apiUrl + '/';
    constructor(private http: HttpClient) {
    }

    getCotacoes(cotar: CotarModel): Observable<any> {
        return this.http.post<any>(this.url +
            'escolas', cotar);
    }
}