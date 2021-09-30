/// <reference types="cypress" />

context('Home Page Test', () => {
    beforeEach(() => {
        cy.visit('https://www.originalcottages.co.uk/')
    })

    it('accept reccomended cookies settings and search property', () => {

        cy.get('#ccc-recommended-settings').click()

        cy.get('[placeholder="Destination or property"]').click()
        cy.get('[placeholder="Location or Area"]').click().type('sussex')
        cy.get('.ui-menu-item-wrapper').eq(0).click()
        cy.get('.tocc__overlay__close').click()

        let date = new Date()
        date.setDate(date.getDate() + 5)
        let futureDay = date.getDay()
        let futureMonth = date.getMonth()

        cy.get('[class="form-item js-form-item oc-formelement form-item-fromdate js-form-item-fromdate oc-formelement--fromdate"]').click()

        cy.get('.ui-datepicker-month').then(month => {
            if (month !== futureMonth) {
                cy.get('.ui-datepicker-next').click()
                cy.get('.ui-datepicker-calendar td a').contains(futureDay).click()
            } else {
                cy.get('.ui-datepicker-calendar td a').contains(futureDay).click()
            }
        })
        cy.get('[class="oc-button expanded oc-button--expanded"]').click()
        cy.get('#qs-edit-submit').click()
        cy.wait(5000)
        cy.get('[class="tabsapipropertysearchmapviewheader__child__text"]').should('contain', 'Properties found')
    })
})





