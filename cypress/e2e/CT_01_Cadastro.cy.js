///<reference types="cypress"/>

import SignupPage from '../pages/SignupPage'

describe('Entregador Cadastrado com sucesso', () => {

    const Signup = new SignupPage()

    it('Usuáro de se tornar um entregador', () => {
       
       

        Signup.go()
         Signup.fillForm()
            Signup.submit()
            Signup.modalContentShouldBe()
      


    })

})

