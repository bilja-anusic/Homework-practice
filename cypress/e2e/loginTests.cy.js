/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/loginPage";
import { homePage } from "../pageObjects/homePage";

describe('Login tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        homePage.clickLoginBtn()
    })

    it ("Login with valid credentials",() => {
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        homePage.logoutBtn.should('exist')
    })

    it ('Login with invalid credentials', () => {
        loginPage.login('bilja@yahoo.co', 'biljabilja123')
        loginPage.errorAlert.should('be.visible')
        loginPage.errorAlert.should('have.text', 'Bad Credentials')
        loginPage.errorAlert.should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it ('Login with valid credentials with intercept', () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/login").as('validLogin')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        cy.wait('@validLogin').then((request) => {
        expect(request.response.statusCode).to.eql(200)
        })
    })

    it ('Logout', () => {
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        homePage.clickLogoutBtn()
        homePage.loginBtn.should('exist')
    })    

    it ('Logout with intercept', () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/logout").as('validLogout')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        homePage.clickLogoutBtn()
        cy.wait('@validLogout').then((request) => {
        expect(request.response.statusCode).to.eql(200)   
        })
    })

    afterEach(() => {
        cy.clearCookies()
    })
}) 