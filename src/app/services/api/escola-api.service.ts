import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscolaModel } from 'src/app/models/escola-model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EscolaApiService {
    private url = environment.apiUrl + '/';
    constructor(private http: HttpClient) {
    }

    getEscolas(): Observable<Array<EscolaModel>> {
        return this.http.get<Array<EscolaModel>>(this.url + 'escolas');
    }

    insertEscola(escola: EscolaModel): Observable<any> {
        return this.http.post<any>(this.url + 'escola', escola);
    }
}
