describe('Changing phone number in personal data', () => {
    it('Authorisation', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.get('.menu-pop > .rprof').click()
        cy.get(':nth-child(5) > .imail').type("temovar@gmail.com")
        cy.get('.ipass').type("pass123")
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.get('.menu-pop > .iprof').click()
        cy.get(':nth-child(4) > .editt').click()
        cy.get(':nth-child(4) > .redinput').type("593600600")
        cy.get(':nth-child(4) > .save-personal > img').click()
        cy.contains("ინფორმაცია წარმატებით განახლდა").should("be.visible")
    })
})