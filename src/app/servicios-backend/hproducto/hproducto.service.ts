import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HproductoService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_HPRODUCTOS = this.PATH_BACKEND + "/api/HProducto"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/HProducto/GetHProductoById"
  URL_ADD_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/AddHProducto"
  URL_UPDATE_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/UpdateHProducto"
  URL_DELETE_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/DeleteHProducto"

  constructor(private http: HttpClient) { }

  public GetHProductos(): Observable<HttpResponse<any>> {

      return this.http
          .get<any>(this.URL_GET_HPRODUCTOS,
              { observe: 'response' })
          .pipe();
  }

  public AddHProducto(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_ADD_HPRODUCTO, entidad,
              { observe: 'response' })
          .pipe();
  }





}