

class MyGallery {
    get deleteGalleryBtn() {
        return cy.get(':nth-child(5) > button.btn')
    }

    get editGalleryBtn() {
        return cy.get('a.btn')
    }

    get submitBtn() {
        return cy.get('form > .btn')
    }

    get commentsInput () {
        return cy.get('textarea')
    }


    clickDeleteGalleryBtn() {
        this.deleteGalleryBtn.click()
    }

    clickEditGalleryBtn() {
        this.editGalleryBtn.click()
    }

    clickSubmitGalleryBtn() {
        this.submitGalleryBtn.click()
    }

    commentsInput(comment) {
        this.commentsInput.type(comment)
    }

}
export const myGallery = new MyGallery()