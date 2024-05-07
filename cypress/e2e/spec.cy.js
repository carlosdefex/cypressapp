const login = require("../e2e/login");
const { getRandomInt } = require("./utility");

describe("template spec", () => {
  let user = "Heath93";

  beforeEach(() => {
    cy.visit("signin");
  });

  it("Edit name input on user module", () => {
    let userName = "test" + getRandomInt(5);
    cy.login(user);
    cy.get('[data-test="sidenav-user-settings"]').click();
    cy.get('[data-test="user-settings-firstName-input"]').clear().type(userName);
    cy.get('[data-test="user-settings-submit"]').click();

    //assert
    cy.get('[data-test="sidenav-home"]').click();
    cy.get('[data-test="sidenav-user-settings"]').click();
    cy.get('[data-test="user-settings-firstName-input"]')
    .should('have.value', userName);
  });

  it("logout", () => {
    //cy.visit('http://localhost:3000/signin')
    cy.login(user);
    cy.get('[data-test="sidenav-signout"]').click();
  });
});
