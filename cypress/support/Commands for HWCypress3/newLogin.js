Cypress.Commands.add("NewLogin", (email,password) => {
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
    // cy.contains(" Logged in as lika").should("be.visible")
})