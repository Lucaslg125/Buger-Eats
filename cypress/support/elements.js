const elements = {

TELA_INICAL: {

BTN_CADASTRAR_ENTREGADOR:'a[href="/deliver"]',
},

CADASTRO:{

    TXT_CADASTRO_DE_USUARIO:'#page-deliver form h1',
    NOME_COMPLETO:'input[name="name" ]',
    CPF:'input[name="cpf" ]',
    EMAIL:'input[name="email" ]',
    WHATSAPP:'input[name="whatsapp" ]',
    CEP:'input[name="postalcode" ]',
    RUA:'input[name="address"]',
    BAIRRO:'input[name="district"]',
    CIDADE:'input[name="city-uf"]',
    BTN_CEP:'input[value="Buscar CEP"]',
    MSG_ERROR:'.alert-error',
    NUMERO_ENDERECO:'input[name="address-number"]',
    COMPLEMENTO:'input[name="address-details"]',
    METODO_ENTREGA:'.delivery-method li',
    CNH:'input[accept^="image"]',
    BTN_CADASTRADO:'button[type="submit"][class="button-success"]',
    MENSAGEM_RECEBEMOS_DADOS:'.swal2-container .swal2-html-container',
   BTN_FECHAR:'button[class="swal2-confirm swal2-styled"]',

    },

}

export default elements;