import { $ } from '@wdio/globals'

class RegisterPage {
    // Botão para abrir a tela de cadastro
    get btnSignUp () {
        return $('//android.widget.TextView[@text="Sign up"]')
    }

    // Campos do formulário
    get firstName () {
        return $('android=new UiSelector().resourceId("firstName")')
    }

    get lastName () {
        return $('android=new UiSelector().resourceId("lastName")')
    }

    get phoneNumber () {
        return $('android=new UiSelector().resourceId("phone")')
    }

    get email () {
        return $('android=new UiSelector().resourceId("email")')
    }

    get password () {
        return $('android=new UiSelector().resourceId("password")')
    }

    get confirmPassword () {
        return $('android=new UiSelector().resourceId("repassword")')
    }

    // Botão Criar Conta
    get btnCreateAccount () {
        return $('~Create') // usando accessibility id
    }

    // Método para cadastrar um novo usuário
    async register(firstName, lastName, phone, email, password, confirmPassword) {
        await this.btnSignUp.click()
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phone)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.confirmPassword.setValue(confirmPassword)
        await this.btnCreateAccount.click()
    }
}

export default new RegisterPage();
