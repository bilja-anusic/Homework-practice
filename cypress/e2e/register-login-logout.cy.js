describe("Register page test",() =>{
    it("Visit register page",() =>{
        cy.visit("/")
        cy.get('.nav-link').eq(2).click()
    })

    it("Register with valid credentials", () =>{
        cy.visit("/")
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type("biljaaa")
        cy.get('#last-name').type("anusic")
        cy.get('#email').type("biljaaaa@gmail.com")
        cy.get('#password').type("12345678")
        cy.get('#password-confirmation').type("12345678")
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })

    it("Visit gallery app",() =>{
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
    })
    it("Login with valid credentials", () =>{
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
        cy.get('#email').type("biljaaaa@gmail.com")
        cy.get('#password').type("12345678")
        cy.get('.btn').click()
    })
    it("Logout", () =>{
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
        cy.get('#email').type("biljaaaa@gmail.com")
        cy.get('#password').type("12345678")
        cy.get('.btn').click()
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()

    })
})