import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_CARRITOCOMPRAS = this.PATH_BACKEND + "/api/CarritoCompra"
  URL_GET_BY_ID_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/GetCarritoCompraById"
  URL_ADD_CARRITOCOMPRA = this.PATH_BACKEND + "/api/CarritoCompra/AddHCarritoCompra"


  constructor(private http: HttpClient) { }

  public GetCarritoCompras(): Observable<HttpResponse<any>> {

      return this.http
          .get<any>(this.URL_GET_CARRITOCOMPRAS,
              { observe: 'response' })
          .pipe();
  }

  public AddCarritoCompra(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_ADD_CARRITOCOMPRA, entidad,
              { observe: 'response' })
          .pipe();
  }
}