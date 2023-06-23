/// <reference types="cypress" />

describe('Agregar una Categoria', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100')
      })

    it('Abrir la opción de CRUD Categorias', () => {
        cy.get('ion-tab-button').eq(0).click();
    });

    it('Click al editar', () => {
        cy.wait(1000);
        cy.get('#deleteCategoria35').should('be.visible').click();//Verifica que exista un ion-item
    })

})