/// <reference types="cypress" />

// TODO: This is workaround for the javascript error on the page
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import { demoAccountFormPage } from '../support/pageObjects/demoAccountFormPage'

describe('Demo trading account form', () => {
    beforeEach(() => {
        cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo');
    })

    // @AXRY001
    it('Provide values only for mandatory fields', () => {
        demoAccountFormPage.fillInLastname()
        demoAccountFormPage.fillInPhoneNumber()
        demoAccountFormPage.fillInEmail()
        demoAccountFormPage.fillInDeposit()
        demoAccountFormPage.checkAgreement()
        demoAccountFormPage.submit()

        cy.url().should('equal', 'https://portal.axiory.com/register/?lng=ja&step=completed-undefined')
    });

    // @AXRY004
    it('Rejects invalid email format', () => {
        demoAccountFormPage.fillInLastname()
        demoAccountFormPage.fillInPhoneNumber()
        demoAccountFormPage.fillInEmail('asdf@example')
        demoAccountFormPage.fillInDeposit()
        demoAccountFormPage.checkAgreement()
        demoAccountFormPage.submit()

        cy.url().should('not.equal', 'https://portal.axiory.com/register/?lng=ja&step=completed-undefined')
        // Note: This test is currently failing, because it reveals presented bug: invalid email format is accepted
    });
});