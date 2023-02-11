/// <reference types="Cypress" />

import { createGalleryPage } from "../pageObjects/createGalleryPage";
import { homePage } from "../pageObjects/homePage";
import { loginPage } from "../pageObjects/loginPage";
import { allGalleriesPage } from "../pageObjects/allGalleriesPage";
import { faker } from "@faker-js/faker";


describe('Create gallery tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        homePage.clickLoginBtn()
        loginPage.login("bilja@yahoo.com", "biljabilja123")
        homePage.clickCreateGalleryBtn()
    })

    it('Create gallery with valid credentials', () => {
        let titleGallery = faker.lorem.words(3)
        createGalleryPage.createGallery(titleGallery, "kapucino", "https://s.cdnmpro.com/129901928/p/l/4/cappuccino-uramljena-slika-50x50cm~472334.jpg")
        cy.wait(1000) 
        allGalleriesPage.search(titleGallery)
        cy.get(".cell").should("have.length",1)
        cy.get('h2 > .box-title').should("contain.text",titleGallery)
    })

    it('Create gallery with invalid image url', () => {
        createGalleryPage.createGallery("slika kafe", "kapucino", "https://s.cdnmpro.com/129901928/p/l/4/cappuccino-uramljena-slika-50x50cm~472334.j")
        loginPage.errorAlert.should("be.visible") 
        loginPage.errorAlert.should('have.text', 'Wrong format of image')
    })

    it('Create gallery with intercept', () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries").as("validCreateGallery")
        createGalleryPage.createGallery("kafa 1", "slika 1", "https://sites.google.com/site/kafakafavaka/_/rsrc/1427971310667/sllike/slika-solje-kafe/zp-kafa.jpg")
        cy.wait('@validCreateGallery').then((request) => {
            expect(request.response.statusCode).to.eql(201)
        })
})

afterEach(() => {
    cy.clearCookies()
})
})