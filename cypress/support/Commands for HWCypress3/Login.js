Cypress.Commands.add("Login", (email,password) => {
    cy.visit('https://www.automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type("temo.temo@gmail.com")
    cy.get('[data-qa="login-password"]').type("temo123321")
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})