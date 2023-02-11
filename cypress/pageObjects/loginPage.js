

class LoginPage {
    get emailInput() {
    return cy.get("#email")
    }

    get passwordInput() {
        return cy.get("#password")
    }

    get submitButton() {
        return cy.get("button")
    }

    get errorAlert() {
        return cy.get(".alert")
    }

    

    login(email, password) {
        // cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/login").as('validLogin')
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
        // cy.wait('@validLogin').then((request)=>{
        //     console.log(request.response.body.access_token)
        //     window.localStorage.setItem('token', request.response.body.access_token)
        // })
    }

}

export const loginPage = new LoginPage()