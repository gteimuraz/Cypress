describe('Home Work', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/register')
        cy.fixture("users").as("usersData");
    });
    it('Register', function () {
        cy.Register(this.usersData.ValidUser.email, this.usersData.ValidUser.password)
    })
    it('Login', function () {
        cy.Login(this.usersData.ValidUser.email, this.usersData.ValidUser.password)
    })
    it('Login2Incorrect', function () {
        cy.Login2(this.usersData.InvUser.email, this.usersData.InvUser.password)
    })
})