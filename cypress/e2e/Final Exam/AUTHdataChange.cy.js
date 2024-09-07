describe('Changing phone number in personal data', () => {
    it('Authorisation', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.get('.menu-pop > .rprof').click()
        cy.get(':nth-child(5) > .imail').type("temovar@gmail.com")
        cy.get('.ipass').type("pass123")
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.get('.menu-pop > .iprof').click()
        cy.get(':nth-child(4) > .editt').click()
        cy.get(':nth-child(4) > .redinput').type("593777777")
        cy.contains("593777777").should("be.visible")
    })
})