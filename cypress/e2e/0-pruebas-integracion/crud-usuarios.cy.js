/// <reference types="cypress" />

describe("CRUD Usuarios", () => {
  //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
  beforeEach(() => {
    cy.visit("http://localhost:8100"); //Frontend de Produccion
  });

  //Servicio API - GetUsuarios()
  it("GetUsuarios()", () => {
    cy.wait(1000);
    cy.get("ion-tab-button").eq(1).click(); // click en el TAB de Usuarios
    cy.wait(1000);
    cy.get("ion-item").should("be.visible").should("not.have.length", "0"); //Verifica que exista un ion-item
  });

  //Servicio API - AddUsuario(entidad)
  it("AddUsuario(entidad)", () => {
    cy.get("ion-tab-button").eq(1).click(); // click en el TAB de Usuarios
    cy.wait(1000);

    cy.get("#nombreCompleto")
      .type("insertar nombreCompleto cypress", { delay: 100 })
      .should("have.value", "insertar nombreCompleto cypress");
    cy.wait(500);
    cy.get("#userName")
      .type("insertar userName cypress", { delay: 100 })
      .should("have.value", "insertar userName cypress");
    cy.wait(500);
    cy.get("#password")
      .type("insertar password cypress", { delay: 100 })
      .should("have.value", "insertar password cypress");
    cy.wait(500);

    cy.get("#addUsuario").not("[disabled]").click();
  });

});
