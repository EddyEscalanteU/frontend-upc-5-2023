import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    URL_GET_CATEGORIA = "https://localhost:44301/api/Categoria"
    URL_GET_BY_ID_CATEGORIA = "https://localhost:44301/api/Categoria/GetCategoriaById?id=6"
    URL_ADD_CATEGORIA = "https://localhost:44301/api/Categoria/AddCategoria"
    URL_UPDATE_CATEGORIA = "https://localhost:44301/api/Categoria/UpdateCategoria"
    URL_DELETE_CATEGORIA = "https://localhost:44301/api/Categoria/DeleteCategoria?id=26"

    constructor(private http: HttpClient) { }

    public GetCategoria(): Observable<HttpResponse<any>> {

        return this.http
            .get<any>(this.URL_GET_CATEGORIA,
                { observe: 'response' })
            .pipe();
    }

}
