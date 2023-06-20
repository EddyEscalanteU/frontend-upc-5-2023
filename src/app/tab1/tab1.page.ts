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

    constructor(public navCtrl: NavController,
        private categoriaServices: CategoriaService) {
        this.GetCategoria();
    }

    private GetCategoria() {
        this.categoriaServices.GetCategoria().subscribe({
            next: (response: HttpResponse<any>) => {
                this.listCategoria = response.body;
                console.log(this.listCategoria)
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

    public updateCategoria(item){
        console.log(item)
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
