// Cypress.Commands.add('register', (email, loggingName, password) => {
//     cy.visit('https://automationteststore.com/')
//     cy.log(email, loggingName, password)
//     cy.get('#customer_menu_top > li > a').click()
//     cy.get('.newcustomer > .heading2').should("be.visible")
//     cy.get('.newcustomer > .heading2').should("contain", "I am a new")
//     cy.get('#accountFrm_accountregister').should("be.checked")
//     cy.get('#accountFrm > fieldset > .btn').click()
//     cy.get('#AccountFrm_firstname').type("Temo")
//     cy.get('#AccountFrm_lastname').type("Galustiani")
//     cy.get('#AccountFrm_email').type(email)
//     cy.get('#AccountFrm_address_1').type("London")
//     cy.get('#AccountFrm_city').type("London")
//     cy.get('#AccountFrm_zone_id').select("Aberdeen")
//     cy.get('#AccountFrm_postcode').type("0108")
//     cy.get('#AccountFrm_country_id').select("United Kingdom")
//     cy.get('#AccountFrm_loginname').type(loggingName)
//     cy.get('#AccountFrm_password').type(password)
//     cy.get('#AccountFrm_confirm').type(password)
//     cy.get('#AccountFrm_newsletter1').check()
//     cy.get('#AccountFrm_agree').check()
//     cy.get('.col-md-2 > .btn').click()
//     cy.get('.maintext').should("contain", "Your Account Has Been Created!")
//     cy.get('.mb40 > .btn').click()
// })