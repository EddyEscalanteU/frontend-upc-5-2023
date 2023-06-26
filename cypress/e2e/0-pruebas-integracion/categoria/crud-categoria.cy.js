/// <reference types="cypress" />

describe('CRUD Categorias', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetCategoria()
    it('GetCategoria()', () => {
        cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(0).click(); // click en el TAB de Categoria
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    it('AddCategoria()', () => {
        cy.wait(1000);
        cy.get('#nombreCategoria').type('insertar categoria cypress', { delay: 100 }).should('have.value', 'insertar categoria cypress');
        cy.wait(500);
        cy.get('#agregarCategoria').not('[disabled]').click();
    });

});