import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscolaModel } from 'src/app/models/escola-model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';


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

    getSeries(escola: EscolaModel): Observable<Array<number>> {
        return this.http.get<Array<number>>(this.url + 'series/' + escola.nome);
    }

    getMateriais(escola: EscolaModel, serie: number): Observable<any> {
        return this.http.get<any>(this.url +
            'itens/' +
            escola.nome + '/' +
            serie);
    }
}