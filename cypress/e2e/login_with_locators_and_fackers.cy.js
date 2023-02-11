const locators = require("../fixtures/locators.json")
const {faker} = require("@faker-js/faker")

describe("Login test",() =>{
    beforeEach( () =>{
        cy.visit("/")
        cy.get(locators.header.loginButton).click()
        })


        it("Login with valid credentials", () =>{

    
            cy.get(locators.login.email).type("biljaaaa@gmail.com")
            cy.get(locators.login.password).type("12345678")
            cy.get(locators.login.button).click()
        })
    
    it("Login with invalid credentials", () =>{

        const password = faker.internet.password()

        cy.get(locators.login.email).type(faker.internet.email())
        cy.get(locators.login.password).type(password)
        cy.get(locators.login.button).click()
    })

})