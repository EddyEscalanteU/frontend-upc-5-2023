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
                console.log('complete - this.categoriaServices()');
            },
        });
    }

    addCategoria() {
        if (this.nombreCategoria.length > 0) {
            let task = this.nombreCategoria;
            this.listCategoria.push(task);
            this.nombreCategoria = "";
        }
    }

}
