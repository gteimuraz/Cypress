describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
        cy.fixture ("users").as ("userData")
    })
    it.only('Login Valid', function ()  {

        cy.NewLogin(this.userData.ValidUser.email, this.userData.ValidUser.password)
    })
    it('Log Out', () => {


        cy.NewLogin("test.test.5@gmail.com", "lika.112233")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains("Signup / Login").should("be.visible")
    })
    it('Login InValid UserName/Pass', () => {


        cy.NewLogin("araswori@gmail.com", "lika.2233")
        // cy.contains(" Logged in as lika").should("be.visible")
        cy.contains("Your email or password is incorrect!").should("be.visible")
    })
})

