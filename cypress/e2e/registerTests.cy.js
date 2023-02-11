/// <reference types="Cypress" />

import { registerPage } from "../pageObjects/registerPage";
import { homePage } from "../pageObjects/homePage";

const {faker} = require("@faker-js/faker")

describe('Register tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        homePage.clickRegisterBtn()
    })

    it ("Register with valid credentials",() => {
        registerPage.register('biljana', 'anusic', faker.internet.email(), faker.internet.password())
        homePage.logoutBtn.should('exist')
    })

    it ("Invalid register test - with one character in password", () => {
        registerPage.register('biljana', 'anusic', faker.internet.email(), "1")
        registerPage.errorAlert.should('be.visible')
        registerPage.errorAlert.should('have.text', 'The password must be at least 8 characters.')

    })

    afterEach(() => {
        cy.clearCookies()
    })
}) 