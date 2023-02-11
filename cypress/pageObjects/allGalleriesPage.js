

class AllGalleriesPage {
    get filterInput() {
        return cy.get('.form-control')
    }

    get filterBtn() {
        return cy.get('.input-group-append > .btn')
    }

    get pageTitle() {
        return cy.get('.title-style')
    }

    get loadMoreBtn() {
        return cy.get(':nth-child(3) > :nth-child(2) > .btn')
    }

    get galleryElement() {
        return cy.get(".cell")

    }

    search(text) {
        this.filterInput.type(text)
        this.filterBtn.click()
    }
}
export const allGalleriesPage = new AllGalleriesPage()