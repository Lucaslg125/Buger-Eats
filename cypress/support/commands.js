import el from './elements'



Cypress.Commands.add('acessarCadastroUsuario', () => {
   
    cy.visit('/')
    cy.get(el.TELA_INICAL.BTN_CADASTRAR_ENTREGADOR).should('be.visible').click()
    cy.get(el.CADASTRO.TXT_CADASTRO_DE_USUARIO).should('have.text', 'Cadastre-se para  fazer entregas')

})