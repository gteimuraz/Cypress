describe('Changing phone number in personal data', (Email,Password) => {
    it('Authorisation', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.Login ()
        cy.get('.menu-pop > .iprof').click()
        cy.get(':nth-child(4) > .editt').click()
        cy.get(':nth-child(4) > .redinput').type("593600600")
        cy.get(':nth-child(4) > .save-personal > img').click()
        cy.contains("ინფორმაცია წარმატებით განახლდა").should("be.visible")
    })
})