const faker = require('faker');

// TODO: This is workaround, because Japanese is not accepted by form validation
// faker.setLocale('ja')

const inputFields = {
    firstname: 'input#firstname',
    lastname: 'input#lastname',
    phoneNumber: 'input#phone',
    email: 'input#email',
    country: 'input#country',
    deposit: 'input#deposit',
}
const checkboxes = {
    agreement: 'input#iAgreeDemo'
}
const buttons = {
    submit: 'input[type=submit]' // This CSS selector could be problem in the future
}

export const demoAccountFormPage = {
    fillInFirstname(firstname) {
        if (firstname === undefined) {
            firstname = faker.name.firstName()
        }
        cy.get(inputFields.firstname).type(firstname)
    },
    fillInLastname(lastname) {
        if (lastname === undefined) {
            lastname = faker.name.lastName()
        }
        cy.get(inputFields.lastname).type(lastname)
    },
    fillInPhoneNumber(phoneNumber) {
        if (phoneNumber === undefined) {
            phoneNumber = faker.phone.phoneNumber()
        }
        cy.get(inputFields.phoneNumber).type(phoneNumber)
    },
    fillInEmail(email) {
        if (email === undefined) {
            // email = faker.internet.email()
            email = faker.name.lastName().toLowerCase() + '@example.com'
        }
        cy.get(inputFields.email).type(email)
    },
    fillInDeposit(depositAmount) {
        if (depositAmount === undefined) {
            depositAmount = faker.datatype.number({min: 1000, max: 10000000})
        }
        cy.get(inputFields.deposit).type(depositAmount)
    },
    checkAgreement() {
        cy.get(checkboxes.agreement).check()
    },
    submit() {
        cy.get(buttons.submit).click()
    }
}
