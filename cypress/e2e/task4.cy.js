/// <reference types="cypress" />

describe('Task 4', () => {
    it('Spying request', () => {
        cy.intercept('GET', 'https://test.k6.io/flip_coin.php').as('flip-coin')

        cy.visit('https://test.k6.io/flip_coin.php')

        cy.wait('@flip-coin').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    });

    it('Stub the response with static data', () => {
        cy.intercept('/flip_coin.php*', {fixture: 'winResponse.html'}).as('flip-coin')

        cy.visit('https://test.k6.io/flip_coin.php?bet=heads')
        cy.get('h1').contains('You won')
        cy.visit('https://test.k6.io/flip_coin.php?bet=tails')
        cy.get('h1').contains('You won')
    });

    it('Using fixture', () => {
        cy.visit('https://test.k6.io/my_messages.php')
        cy.fixture('adminUser').then((user) => {
            cy.get('input[name="login"]').type(user.username)
            cy.get('input[name="password"]').type(user.password)
        })

        cy.get('input[type="submit"]').click()

        cy.get('h2').contains('Welcome, admin')
    });
});
