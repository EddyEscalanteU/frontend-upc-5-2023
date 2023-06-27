/// <reference types="cypress" />

describe('CRUD Categorias', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetCategoria()
    it('GetCategoria()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(0).click(); // click en el TAB de Categoria
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddCategoria(entidad)
    it('AddCategoria(entidad)', () => {
        cy.wait(1000);
        cy.get('#nombreCategoria').type('insertar NOMBRE cypress', { delay: 100 }).should('have.value', 'insertar categoria cypress');
        cy.wait(500);
        cy.get('#agregarCategoria').not('[disabled]').click();
    });

    //Servicio API - UpdateCategoria(entidad)
    it('UpdateCategoria(entidad)', () => {
        cy.wait(1000);
        cy.get('#updateCategoria').eq(0).click(); //Click al boton de Editar una categoria
        cy.wait(1000);
        cy.get('#nombreCategoria').invoke('val', ''); //Vaciar el campo del textfield de nombreCategoria
        cy.get('#nombreCategoria').type('update NOMBRE Cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de nombreCategoria"
        cy.wait(500);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteCategoria(id)
    it('DeleteCategoria(id)', () => {
        cy.wait(1000);
        cy.get('#deleteCategoria').eq(0).click(); //Click al boton de Eliminar una categoria
    });
});