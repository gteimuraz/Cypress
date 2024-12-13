Cypress.Commands.add("Login2", (email, password) => {
    // cy.visit('https://www.automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains("Your email or password is incorrect!").should("be.visible")
})