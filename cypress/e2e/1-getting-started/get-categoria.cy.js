/// <reference types="cypress" />

describe('Obtener todas las Categorias', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100')
      })

    it('Abrir la opción de CRUD Categorias', () => {
        cy.get('ion-menu-button').should('be.not.visible');
        cy.get('ion-menu-toggle').eq(4).click();
    });
})