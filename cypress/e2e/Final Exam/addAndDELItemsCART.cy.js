describe('Add and DEL item CART', () => {
    it('Cart', () => {
        cy.visit('https://testzootopia.loremipsum.ge')
        cy.get('.menu-pop > .rprof').click()
        cy.get(':nth-child(5) > .imail').type("temovar@gmail.com")
        cy.get('.ipass').type("pass123")
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.get('.menu-pop > .iprof').should("be.visible")
        cy.get('.popmenu-burger').click()
        cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
        cy.get('[imgsrc="/uploads/ProductCategory/997861594708360.jpg"] > [href="javascript:void(0)"]').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click()
        cy.get('.category-holder > .active > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart > p').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.cart-item').should("be.visible")
        cy.get('.clear > a > svg').click()
        cy.get('.empty > p').should("be.visible")
    })
})