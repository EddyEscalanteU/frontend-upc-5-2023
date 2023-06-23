import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { CarritoCompraService } from '../servicios-backend/carrito-compra/carrito-compra.service';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page 
{

  public listCarritoCompra = [];
  public id = ""
  public idUsuario = ""
  public fecha = ""
 
 
  public swGuardarCambios = false

  constructor(private carritoCompraService: CarritoCompraService ) {
    this.GetCarritoCompras();//Se carga el listado cada vez que se abra la pag.
  }

  public GetCarritoCompras(){
    this.carritoCompraService.GetCarritoCompras().subscribe({
        next: (response: HttpResponse <any>) => {
            this.listCarritoCompra = response.body;
            //console.log(this.listProducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetCarritoCompras()');
        },
    });
  }

  public addCarritoCompra() {
    if (this.idUsuario.length > 0 && this.fecha.length > 0) {
      const entidad = {
        idUsuario: this.idUsuario,
        fecha: this.fecha
      };
  
      this.carritoCompraService.AddCarritoCompra(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body);
          if (response.body === 1) {
            alert("Se agregó el Carrito de Compra con éxito :)");
            this.GetCarritoCompras(); // Actualizar el listado
            this.idUsuario = "";
            this.fecha = "";
          } else {
            alert("Al agregar el Carrito de Compra falló :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.addCarritoCompra()');
        }
      });
    }
  }
}
