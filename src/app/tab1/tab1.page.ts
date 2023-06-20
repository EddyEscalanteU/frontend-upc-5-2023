import { Component } from '@angular/core';
import { CategoriaService } from '../servicios-backend/categoria/categoria.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public listCategoria = [];
    public nombreCategoria = ""
    public idCategoria = ""
    public swGuardarCambios = false

    constructor(public navCtrl: NavController,
        private categoriaServices: CategoriaService) {
        this.GetCategoria();
    }

    private GetCategoria() {
        this.categoriaServices.GetCategoria().subscribe({
            next: (response: HttpResponse<any>) => {
                this.listCategoria = response.body;
                //console.log(this.listCategoria)
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.GetCategoria()');
            },
        });
    }

    public addCategoria() {
        if (this.nombreCategoria.length > 0) {
            var entidad = {
                nombre : this.nombreCategoria
            }
            console.log(entidad)
            this.categoriaServices.AddCategoria(entidad).subscribe({
                next: (response: HttpResponse<any>) => {
                    console.log(response.body)//1
                    if(response.body == 1){
                        alert("Se agrego la categoria con exito :)");
                        this.GetCategoria();//Se actualize el listado
                        this.nombreCategoria = "";
                    }else{
                        alert("Al agregar la categoria fallo exito :(");
                    }
                },
                error: (error: any) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('complete - this.addCategoria()');
                },
            });
        }
    }

    public guardarCambios(){
        this.swGuardarCambios = false;
        if (this.nombreCategoria.length > 0) {
            var entidad = {
                id: this.idCategoria,
                nombre : this.nombreCategoria
            }
            console.log(entidad)
            this.categoriaServices.UpdateCategoria(entidad).subscribe({
                next: (response: HttpResponse<any>) => {
                    console.log(response.body)//1
                    if(response.body == 1){
                        alert("Se modifico la categoria con exito :)");
                        this.GetCategoria();//Se actualize el listado
                        this.idCategoria = "";
                        this.nombreCategoria = "";
                    }else{
                        alert("Al modificar la categoria fallo exito :(");
                    }
                },
                error: (error: any) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('complete - this.guardarCambios()');
                },
            });
        }
    }

    public updateCategoria(item){
        console.log(item)
        this.idCategoria = item.id
        this.nombreCategoria = item.nombre
        this.swGuardarCambios = true;
    }

    public deleteCategoria(item){
        console.log(item.id)
        this.categoriaServices.DeleteCategoria(item).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se elimino la categoria con exito :)");
                    this.GetCategoria();//Se actualize el listado
                }else{
                    alert("Al eliminar la categoria fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.GetCategoria()');
            },
        });
    }

}
