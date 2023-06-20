import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    URL_BACKEND = "https://localhost";
    PORT_BACKEND = ":44301";

    PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;

    URL_GET_CATEGORIA = this.PATH_BACKEND + "/api/Categoria"
    URL_GET_BY_ID_CATEGORIA = this.PATH_BACKEND + "/api/Categoria/GetCategoriaById"
    URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/Categoria/AddCategoria"
    URL_UPDATE_CATEGORIA = this.PATH_BACKEND + "/api/Categoria/UpdateCategoria"
    URL_DELETE_CATEGORIA = this.PATH_BACKEND + "/api/Categoria/DeleteCategoria"

    constructor(private http: HttpClient) { }

    public GetCategoria(): Observable<HttpResponse<any>> {

        return this.http
            .get<any>(this.URL_GET_CATEGORIA,
                { observe: 'response' })
            .pipe();
    }

    public AddCategoria(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_ADD_CATEGORIA, entidad,
                { observe: 'response' })
            .pipe();
    }

    public DeleteCategoria(item): Observable<HttpResponse<any>> {
    
        let params = new HttpParams();
        params = params.set('id', item.id);

        return this.http
            .post<any>(this.URL_DELETE_CATEGORIA,  "", {params: params, observe: 'response' })
            .pipe();
    }

}
