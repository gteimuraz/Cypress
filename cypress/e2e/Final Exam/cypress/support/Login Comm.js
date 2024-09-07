Cypress.Commands.add('Login', (Email,Password) => {
    describe('Login', (Email,Password) => {
        it('Authorisation', () => {
            cy.fixture ("user").as("userData")
            cy.visit('https://testzootopia.loremipsum.ge')
            cy.get('.menu-pop > .rprof').click()
            cy.get(':nth-child(5) > .imail').type("temovar@gmail.com")
            cy.get('.ipass').type("pass123")
            cy.get('.avtorization > .input-shablon > .form-button').click()
        })
    })
})