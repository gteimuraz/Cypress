describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
//     1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully\
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// 5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should("have.text","New User Signup!")
// 6. Enter name and email address
cy.get('[data-qa="signup-name"]').type("ana")
cy.get('[data-qa="signup-email"]').type("testtemo@gmail.com")
// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.contains("Enter Account Information").should("be.visible")
// 9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('#id_gender1').check()
cy.get('[data-qa="password"]').type("password123")
cy.get('[data-qa="days"]').select("11")
cy.get('[data-qa="months"]').select("6")
cy.get('[data-qa="years"]').select("2000")
// 10. Select checkbox 'Sign up for our newsletter!'

// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  })
})