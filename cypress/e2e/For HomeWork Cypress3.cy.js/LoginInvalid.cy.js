// describe('template spec', () => {
//     beforeEach(() => {
//         cy.visit('https://www.automationexercise.com')
//     })
//     it.only('LoginIvl', () => {
//         cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//         cy.get('[data-qa="login-email"]').type("temo.test.6@gmail.com")
//         cy.get('[data-qa="login-password"]').type("temo555")
//         cy.get('[data-qa="login-button"]').click()
//         cy.contains("Your email or password is incorrect!").should("be.visible")
//         })
//     })