import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscolaModel } from 'src/app/models/escola-model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SerieApiService {
    private url = environment.apiUrl + '/';
    constructor(private http: HttpClient) {
    }

    getSeries(escola: EscolaModel): Observable<Array<number>> {
        return this.http.get<Array<number>>(this.url + 'series/' + escola.nome);
    }

    insertSerie(escola: EscolaModel, serie: number): Observable<any> {
        return this.http.post<any>(this.url + 'serie', { escola: escola.nome, serie: serie });
    }
}