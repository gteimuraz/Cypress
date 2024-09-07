describe('Registration with Valid Cridentials', (Email,Password) => {
    it('Register', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.fixture('user').as('userData');
        let random = Math.round((Math.random() * 1000))
        cy.get('.menu-pop > .rprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type("თემო გალუსტიანი")
        cy.get('.ipir').type(random)
        cy.get(':nth-child(2) > .imail').type("temovar"+random+"@gmail.com")
        cy.get(':nth-child(4) > .itel').type("593"+random)
        cy.get(':nth-child(5) > .ipass').type("pass123")
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type("pass123")
        cy.get('[for="profile2"]').click()
        cy.get('.etx > svg').click()
        cy.get('.regsub').click()
    })
})