/// <reference types="cypress" />

describe('CRUD Producto', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
    })

    //Servicio API - GetProducto()
    it('GetProducto()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(2).click(); // click en el TAB de Producto
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddProducto(entidad)
    it('AddProducto(entidad)', () => {
        cy.get('ion-tab-button').eq(2).click(); // click en el TAB de Producto
        cy.wait(1000);

        cy.get('#nombreProducto')
            .type('add nombreProducto cypress', { delay: 100 })
            .should('have.value', 'add nombreProducto cypress');
        cy.wait(500);

        cy.get('#idCategoriaProducto').type(102, { delay: 100 }).should('have.value', 102);
        cy.wait(500);

        cy.get('#addProducto').not('[disabled]').click();
    });

    //Servicio API - UpdateProducto(entidad)
    it('UpdateProducto(entidad)', () => {
        cy.get('ion-tab-button').eq(2).click(); // click en el TAB de Producto
        cy.wait(1000);

        cy.get('#updateProducto').eq(0).click(); //Click al boton de Editar un Producto
        cy.wait(1000);

        cy.get('#nombreProducto').invoke('val', ''); //Vaciar el campo del textfield de nombreProducto
        cy.get('#nombreProducto').type('update nombreProducto Cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de nombreCategoria"
        cy.wait(500);

        cy.get('#idCategoriaProducto').invoke('val', ''); //Vaciar el campo del textfield de idCategoriaProducto
        cy.get('#idCategoriaProducto').type('103', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de idCategoriaProducto"
        cy.wait(500);


        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteProducto(id)
    it('DeleteProducto(id)', () => {
        cy.get('ion-tab-button').eq(2).click(); // click en el TAB de Producto
        cy.wait(1000);
        cy.get('#deleteProducto').eq(0).click(); //Click al boton de Eliminar una categoria
    });

});