import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_PRODUCTOS = this.PATH_BACKEND + "/api/Producto"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/Producto/GetProductoById"
  URL_ADD_PRODUCTO = this.PATH_BACKEND + "/api/Producto/AddProducto"
  URL_UPDATE_PRODUCTO = this.PATH_BACKEND + "/api/Producto/UpdateProducto"
  URL_DELETE_PRODUCTO = this.PATH_BACKEND + "/api/Producto/DeleteProducto"

  constructor(private http: HttpClient) { }

  public GetProductos(): Observable<HttpResponse<any>> {

    return this.http
        .get<any>(this.URL_GET_PRODUCTOS,
            { observe: 'response' })
        .pipe();
  }

  public AddProducto(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_ADD_PRODUCTO, entidad,
              { observe: 'response' })
          .pipe();
  }

  public UpdateProducto(entidad): Observable<HttpResponse<any>> {

      return this.http
          .post<any>(this.URL_UPDATE_PRODUCTO, entidad,
              { observe: 'response' })
          .pipe();
  }

  public DeleteProducto(item): Observable<HttpResponse<any>> {
    
    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
        .post<any>(this.URL_DELETE_PRODUCTO,  "", {params: params, observe: 'response' })
        .pipe();
}


}
