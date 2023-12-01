///<reference types="cypress"/>

describe('funcionalidade paginas de produtos', () => {

   beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
   });

   it('Deve selecionar um produto da lista', () => {
      cy.get('[class="product-block grid"]')
         //.first()
         //.last()
         //.eq(4)
         .contains('Geo Insulated Jogging Pant')
         .click()
   });

   it.only('Deve adicionar um produto ao carrinho', () => {
      var quantidade = 4
      
      cy.get('[class="product-block grid"]')
      .contains('Geo Insulated Jogging Pant')
      .click()
      cy.get('.button-variable-item-33').click()
      cy.get('.button-variable-item-Blue').click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()

      cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
      cy.get('.woocommerce-message').should('contain', quantidade + ' × “Geo Insulated Jogging Pant” foram adicionados no seu carrinho.')
   });
});
