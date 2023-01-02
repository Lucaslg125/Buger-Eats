///<reference types="cypress"/>

import SignupPage from '../pages/SignupPage'

describe('CPF INVALIDO', () => {

    const Signup = new SignupPage()

    it('Usuáro de se tornar um entregador CPF iNVALIDO', () => {
       
       

        Signup.go()
         Signup.cpfInvalido()
            Signup.submit()
                Signup.msgCpfInvalido()


    })

})






