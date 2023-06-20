import { Component } from '@angular/core';
import { UsuariosService } from '../servicios-backend/usuarios/usuarios.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nombreCompleto = ""
  public userName = ""
  public password = ""

public listUsuarios = [];

  constructor(private usuariosService: UsuariosService) {
    this.getUsuarios();
  }

  private getUsuarios(){
    this.usuariosService.GetUsuarios().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listUsuarios = response.body;
            console.log(this.listUsuarios)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.getUsuarios()');
        },
    });
  }

  public addUsuario(){

  }

  public updateUsuario(item){

  }

  public deleteUsuario(item){
    
  }

}
