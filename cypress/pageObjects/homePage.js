
class HomePage {
    get loginBtn() {
        return cy.get("a[href='/login']")
    }

    get logoutBtn() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }

    get registerBtn() {
        return cy.get(":nth-child(2) > .nav-link")
    }

    get createGalleryBtn() {
        return cy.get(".mr-auto > :nth-child(3) > .nav-link")
    }


    clickLoginBtn(){
        this.loginBtn.click()
    }

    clickLogoutBtn(){
        this.logoutBtn.click()
    }

    clickRegisterBtn() {
        this.registerBtn.click()
    }

    clickCreateGalleryBtn() {
        this.createGalleryBtn.click()
    }
}

export const homePage = new HomePage()