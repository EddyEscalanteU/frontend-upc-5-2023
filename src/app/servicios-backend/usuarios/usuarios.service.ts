import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL_BACKEND = "https://localhost";
  PORT_BACKEND = ":44301";

  PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;

  URL_GET = this.PATH_BACKEND + "/api/Usuarios"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/Usuarios/GetById"
  URL_ADD_USUARIO = this.PATH_BACKEND + "/api/Usuarios/AddUsuario"

  constructor(private http: HttpClient) { }

  public GetUsuarios(): Observable<HttpResponse<any>> {

    return this.http
        .get<any>(this.URL_GET,
            { observe: 'response' })
        .pipe();
  }

}
