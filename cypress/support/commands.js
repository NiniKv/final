// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillRegistrationForm', (userData) => {
    cy.get('#name').type(userData.name);
    cy.get('#email').type(userData.email);
    cy.get('#personalNumber').type(userData.personalNumber);
    cy.get('#phone').type(userData.phone);
    cy.get('#password').type(userData.password);
    cy.get('#confirmPassword').type(userData.password);
    cy.get('#termsCheckbox').check();
  });