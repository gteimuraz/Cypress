describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com')
    })
    it.only('passes', () => {
        cy.get(':nth-child(4) > a').click()
        
        })
    })