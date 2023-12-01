///<reference types="cypress" />


describe('Funcionalidade de login', () => {

    beforeEach(()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    it('deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20Nome de ExibiçãoNome de Exibição (não é aluno_ebac20')
    });

    it('deve apresentar mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('semuser_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. ')
    });

    it('deve apresentar mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testedeerro')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
});

