
import el from '../support/elements'


class SignupPage {

    go() {

        cy.acessarCadastroUsuario()
    }

    fillForm() {

        var entregador = {
            nome: 'Michele Santos Lima',
            cpf: '30457663073',
            email: 'lima_santosm@gmail.com',
            wahtsapp: '61996144205',
            endereco: {
                cep: '70722500',
                rua: 'CLN 102',
                numero: 191,
                complemento: 159,
                bairro: 'Asa Norte',
                cidade_uf: 'Brasília/DF',

            },

            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg',

        }

        cy.get(el.CADASTRO.NOME_COMPLETO).type(entregador.nome)
        cy.get(el.CADASTRO.NOME_COMPLETO).should('have.value', entregador.nome)
        cy.get(el.CADASTRO.CPF).type(entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.value', entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.length', '1')
        cy.get(el.CADASTRO.EMAIL).type(entregador.email)
        cy.get(el.CADASTRO.EMAIL).should('have.value', entregador.email)
        cy.get(el.CADASTRO.WHATSAPP).type(entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.value', entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.length', '1')
        cy.get(el.CADASTRO.CEP).type(entregador.endereco.cep)
        cy.get(el.CADASTRO.BTN_CEP).should('be.visible').click()
        cy.get(el.CADASTRO.NUMERO_ENDERECO).type(entregador.endereco.numero)
        cy.get(el.CADASTRO.COMPLEMENTO).type(entregador.endereco.complemento)
        cy.get(el.CADASTRO.RUA).should('have.value', entregador.endereco.rua)
        cy.get(el.CADASTRO.BAIRRO).should('have.value', entregador.endereco.bairro)
        cy.get(el.CADASTRO.CIDADE).should('have.value', entregador.endereco.cidade_uf)
        cy.contains(el.CADASTRO.METODO_ENTREGA, entregador.metodo_entrega).click()
        cy.get(el.CADASTRO.CNH).attachFile(entregador.cnh)

    }

    submit() {

        cy.get(el.CADASTRO.BTN_CADASTRADO).should('be.visible').click()

    }

    modalContentShouldBe() {


        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get(el.CADASTRO.MENSAGEM_RECEBEMOS_DADOS).should('have.text', expectedMessage)
        cy.get(el.CADASTRO.BTN_FECHAR).should('be.visible').click()

    }

    cpfInvalido() {

        var entregador = {
            nome: 'Lucas Silva',
            cpf: 'xxxxx04405',
            email: '309.lucas@gmail.com',
            wahtsapp: '11996144205',
            endereco: {
                cep: '70722500',
                rua: 'CLN 102',
                numero: 191,
                complemento: 159,
                bairro: 'Asa Norte',
                cidade_uf: 'Brasília/DF',

            },

            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg',

        }

        cy.get(el.CADASTRO.NOME_COMPLETO).type(entregador.nome)
        cy.get(el.CADASTRO.NOME_COMPLETO).should('have.value', entregador.nome)
        cy.get(el.CADASTRO.CPF).type(entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.value', entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.length', '1')
        cy.get(el.CADASTRO.EMAIL).type(entregador.email)
        cy.get(el.CADASTRO.EMAIL).should('have.value', entregador.email)
        cy.get(el.CADASTRO.WHATSAPP).type(entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.value', entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.length', '1')
        cy.get(el.CADASTRO.CEP).type(entregador.endereco.cep)
        cy.get(el.CADASTRO.BTN_CEP).should('be.visible').click()
        cy.get(el.CADASTRO.NUMERO_ENDERECO).type(entregador.endereco.numero)
        cy.get(el.CADASTRO.COMPLEMENTO).type(entregador.endereco.complemento)
        cy.get(el.CADASTRO.RUA).should('have.value', entregador.endereco.rua)
        cy.get(el.CADASTRO.BAIRRO).should('have.value', entregador.endereco.bairro)
        cy.get(el.CADASTRO.CIDADE).should('have.value', entregador.endereco.cidade_uf)
        cy.contains(el.CADASTRO.METODO_ENTREGA, entregador.metodo_entrega).click()
        cy.get(el.CADASTRO.CNH).attachFile(entregador.cnh)

    }

    msgCpfInvalido() {

        cy.get(el.CADASTRO.BTN_CADASTRADO).should('be.visible').click()
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
        cy.screenshot('CPF inválido')

    }

    cepInvalido() {

        var entregador = {
            nome: 'Lucas Silva',
            cpf: '30457663073',
            email: '309.lucas@gmail.com',
            wahtsapp: '11996144205',
            endereco: {
                cep: 'xxx0148',
                rua: 'CLN 102',
                numero: 191,
                complemento: 159,
                bairro: 'Asa Norte',
                cidade_uf: 'Brasília/DF',

            },

            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg',

        }

        cy.get(el.CADASTRO.NOME_COMPLETO).type(entregador.nome)
        cy.get(el.CADASTRO.NOME_COMPLETO).should('have.have.value', entregador.nome)
        cy.get(el.CADASTRO.CPF).type(entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.value', entregador.cpf)
        cy.get(el.CADASTRO.CPF).should('have.length', '1')
        cy.get(el.CADASTRO.EMAIL).type(entregador.email)
        cy.get(el.CADASTRO.EMAIL).should('have.value', entregador.email)
        cy.get(el.CADASTRO.WHATSAPP).type(entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.value', entregador.wahtsapp)
        cy.get(el.CADASTRO.WHATSAPP).should('have.length', '1')
        cy.get(el.CADASTRO.CEP).type(entregador.endereco.cep)
        cy.get(el.CADASTRO.BTN_CEP).should('be.visible').click()
     

    }

    msgCepInvalido() {

        cy.get(el.CADASTRO.MSG_ERROR).should('have.text', 'Informe um CEP válido')
        cy.screenshot('Informe um CEP válido')

    }
}
export default SignupPage;


