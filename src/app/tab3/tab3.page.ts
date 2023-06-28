import { Component } from '@angular/core';
import { ProductosService } from '../servicios-backend/productos/productos.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listProducto = [];
  public idProducto = ""
  public nombreProducto = ""
  public idCategoria = ""
  public swGuardarCambios = false

  constructor(private productosService: ProductosService) {
    this.GetProductos();//Se carga el listado cada vez que se abra la pag.
  }

  public GetProductos(){
    this.productosService.GetProductos().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listProducto = response.body;
            console.log(this.listProducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('complete - this.GetProductos()');
        },
    });
  }

  public addProducto(){
      if (this.nombreProducto.length > 0 && this.idCategoria.length > 0) {
          var entidad = {
              nombre : this.nombreProducto,
              idCategoria : this.idCategoria
          }
          console.log(entidad)
          this.productosService.AddProducto(entidad).subscribe({
              next: (response: HttpResponse<any>) => {
                  console.log(response.body)//1
                  if(response.body == 1){
                      alert("Se agrego el Producto con exito :)");
                      this.GetProductos();//Se actualize el listado
                      this.nombreProducto = "";
                      this.idCategoria = "";
                  }else{
                      alert("Al agregar el Producto fallo exito :(");
                  }
              },
              error: (error: any) => {
                  console.log(error);
              },
              complete: () => {
                  console.log('complete - this.addProducto()');
              },
          });
      }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.nombreProducto.length > 0) {
        var entidad = {
            id: this.idProducto,
            nombre : this.nombreProducto,
            idCategoria : this.idCategoria
        }
        console.log(entidad)
        this.productosService.UpdateProducto(entidad).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se modifico el Producto con exito :)");
                    this.GetProductos();//Se actualize el listado
                    this.idProducto = "";
                    this.nombreProducto = "";
                    this.idCategoria = "";
                }else{
                    alert("Al modificar el Producto fallo exito :(");
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

  public updateProducto(item){
    console.log(item)
    this.idProducto = item.id //oculto
    this.idCategoria = item.idCategoria //input
    this.nombreProducto = item.nombre //input
    this.swGuardarCambios = true;
  }

  public deleteProducto(item){
        console.log(item.id)
        this.productosService.DeleteProducto(item).subscribe({
            next: (response: HttpResponse<any>) => {
                console.log(response.body)//1
                if(response.body == 1){
                    alert("Se elimino el Producto con exito :)");
                    this.GetProductos();//Se actualize el listado
                }else{
                    alert("Al eliminar el Producto fallo exito :(");
                }
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                console.log('complete - this.deleteProducto()');
            },
        });
  }
}
