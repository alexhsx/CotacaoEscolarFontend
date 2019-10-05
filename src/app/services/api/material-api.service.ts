import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscolaModel } from 'src/app/models/escola-model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';
import { MaterialEscolarModel } from 'src/app/models/material-escolar-model';


@Injectable({
    providedIn: 'root',
})
export class MaterialApiService {
    private url = environment.apiUrl + '/';
    constructor(private http: HttpClient) {
    }

    getMateriais(escola: EscolaModel, serie: number): Observable<Array<ItemModel>> {
        return this.http.get<Array<ItemModel>>(this.url +
            'itens/' +
            escola.nome + '/' +
            serie);
    }

    getAllMateriais(): Observable<MaterialEscolarModel[]> {
        return this.http.get<MaterialEscolarModel[]>(this.url +
            'descricoes');
    }
}
