
class RegisterPage {
    get firstNameInput() {
        return cy.get("#first-name")
    }

    get lastNameInput() {
        return cy.get("#last-name")
    }

    get emailInput() {
        return cy.get("#email")
    }

    get passwordInput() {
        return cy.get("#password")
    }

    get passwordConfirmationInput() {
        return cy.get("#password-confirmation")
    }

    get termsInput() {
        return cy.get(".form-check-input")
    }

    get submitButton() {
        return cy.get(".btn")
    }

    get errorAlert() {
        return cy.get(".alert")
    }

    register(firstName, lastName, email, password) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(password)
        this.termsInput.click()
        this.submitButton.click()
    }

}

export const registerPage = new RegisterPage()