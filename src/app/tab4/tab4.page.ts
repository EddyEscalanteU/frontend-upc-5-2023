import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HproductoService } from '../servicios-backend/hproducto/hproducto.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page 
{

  public listHProducto = [];
  public idHProducto = ""
  public cantidad = ""
  public idProducto = ""
  public idCarritoCompra = ""
  public swGuardarCambios = false

  constructor(private hproductosService: HproductoService ) {
    this.GetHProductos();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProductos(){
    this.hproductosService.GetHProductos().subscribe({
        next: (response: HttpResponse <any>) => {
            this.listHProducto = response.body;
            //console.log(this.listProducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetProductos()');
        },
    });
  }

  public addHProducto() {
    if (this.cantidad.length > 0 && this.idProducto.length > 0 && this.idCarritoCompra.length > 0) {
      const entidad = {
        cantidad: this.cantidad,
        idProducto: this.idProducto,
        idCarritoCompra: this.idCarritoCompra
      };
      console.log(entidad);
  
      this.hproductosService.AddHProducto(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body);
          if (response.body === 1) {
            alert("Se agregó el HProducto con éxito :)");
            this.GetHProductos(); // Actualizar el listado
            this.cantidad = "";
            this.idProducto = "";
            this.idCarritoCompra = "";
          } else {
            alert("Al agregar el HProducto falló :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.addHProducto()');
        }
      });
    }
  }
}