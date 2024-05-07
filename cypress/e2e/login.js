Cypress.Commands.add('login', (user) => {
    cy.get('#username').type(user)
    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('[data-test="signin-submit"]').click()
})