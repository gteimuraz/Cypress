describe('template spec', () => {
    it.only('passes', () => {
        let random = Math.round((Math.random() * 1000))
        let email="temo.temo"+random+"@gmail.com"
        let password="temo123321"+random

        cy.log (random)
        cy.Register (email, password)
        cy.log ("is registered")
    })
})