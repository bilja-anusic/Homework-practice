/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/loginPage";
import { homePage } from "../pageObjects/homePage";
import { createGalleryPage } from "../pageObjects/createGalleryPage";
import { myGallery } from "../pageObjects/myGallery";


describe("Create and delete gallery test", () =>{

    beforeEach(() =>{
        cy.visit("/")
        homePage.clickLoginBtn()
        loginPage.login("bilja@yahoo.com", "biljabilja123")    
    })

    it("Create gallery", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries").as("createGalleryRequest")
        homePage.clickCreateGalleryBtn()
        createGalleryPage.createGallery("solja", "solja1", "https://cdn.pokloni.com/files/25731/solja-Zmaj-Oker-2_thumb_510.jpg")
        cy.wait("@createGalleryRequest").then((req) =>{
            expect(req.response.statusCode).to.eql(201)
        })
    })

    it("Delete gallery", () =>{
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries").as("createGalleryRequest")
        homePage.clickCreateGalleryBtn()
        createGalleryPage.createGallery("solja", "solja1", "https://cdn.pokloni.com/files/25731/solja-Zmaj-Oker-2_thumb_510.jpg")
        cy.wait("@createGalleryRequest").then((req) =>{
            expect(req.response.statusCode).to.eql(201)
            let galleryID = req.response.body.id
            
            cy.intercept("DELETE", "https://gallery-api.vivifyideas.com/api/galleries/"+galleryID).as("deleteGalleryRequest")
            cy.visit("/galleries/"+galleryID)
            myGallery.clickDeleteGalleryBtn()
            // cy.on('window:confirm', (text) => {
            //     expect(text).to.contains('Are you sure you want to delete gallery?')
            // })              
            cy.wait("@deleteGalleryRequest").then((req) =>{
                expect(req.response.statusCode).to.eql(200)
            })
        })
    })
})