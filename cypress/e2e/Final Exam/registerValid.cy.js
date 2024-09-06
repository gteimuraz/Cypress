describe('Registration with Valid Cridentials', () => {
    it('Register', () => {
        cy.visit('https://testzootopia.loremipsum.ge/')
        cy.get('[class="iprof"]').click()
    })
})