///<reference types="cypress"/>

import SignupPage from '../pages/SignupPage'

describe('CEP INVALIDO', () => {

    const signup = new SignupPage

    it('Usuáro de se tornar um entregador', () => {

        signup.go()
        signup.cepInvalido()
        signup.msgCepInvalido()
        

              


    })

})






