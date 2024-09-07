describe('Restore password for valid/registered user', () => {
    it('Authorisation', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.get('.menu-pop > .rprof').click()
        cy.get('.recovery-btn').click()
        cy.get('.recovery > .input-shablon > .input-div > .imail').type("temovar@gmail.com")
        cy.get('.recovery > .input-shablon > .form-button').click()
    })
})