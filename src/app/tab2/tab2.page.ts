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
    if (this.nombreCompleto.length > 0 && this.userName.length > 0 && this.password.length > 0) {
        var entidad = {
          nombreCompleto : this.nombreCompleto,
          userName : this.userName,
          password : this.password
        }
        console.log(entidad)
        this.usuariosService.AddUsuario(entidad).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se agrego al Usuario con exito :)");
                    this.getUsuarios();//Se actualize el listado
                    this.nombreCompleto = "";
                    this.userName = "";
                    this.password = "";
                }else{
                    alert("Al agregar al Usuario fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.addUsuario()');
            },
        });
    }
}

  public updateUsuario(item){

  }

  public deleteUsuario(item){
    
  }

}
