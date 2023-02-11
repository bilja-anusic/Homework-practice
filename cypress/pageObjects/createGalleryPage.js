
class CreateGalleryPage {
    get titleInput() {
    return cy.get("#title")
    }

    get descriptionsInput () {
        return cy.get("#description")
    }

    get imagesInput () {
        return cy.get(".input-group > .form-control")
    }

    get submitBtn () {
        return cy.get("form > :nth-child(4)")
    }

    get addImageBtn () {
        return cy.get("form > :nth-child(3) > :nth-child(3)")
    }


    createGallery(title, description, imageUrl) {
        this.titleInput.type(title)
        this.descriptionsInput.type(description)
        this.imagesInput.type(imageUrl)
        this.submitBtn.click()
    }
    }

    export const createGalleryPage = new CreateGalleryPage()
