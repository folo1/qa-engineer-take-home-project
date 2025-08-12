import { Customer } from "./customer";


export const selectors = {
  firstName: '[data-testid="first-name"]',
  lastName: '[data-testid="last-name"]',
  email: '[data-testid="email"]',
  addressLine1: '[data-testid="address-line-1"]',
  addressLine2: '[data-testid="address-line-2"]',
  city: '[data-testid="city"]',
  state: '[data-testid="state"]',
  zip: '[data-testid="zip"]',
  notes: '[data-testid="notes"]',

  saveButton: '[data-testid="save-button"]',
  deleteButton: '[data-testid="delete-button"]',
};


export function fillModal(customer: Customer){
  cy.get(selectors.firstName).clear().type(customer.firstName);
  cy.get(selectors.lastName).clear().type(customer.lastName);
  cy.get(selectors.email).clear().type(customer.email);
  cy.get(selectors.addressLine1).clear().type(customer.addressLine1);
  cy.get(selectors.addressLine2).clear().type(customer.addressLine2);
  cy.get(selectors.city).clear().type(customer.city);
  cy.get(selectors.state).clear().type(customer.state);
  cy.get(selectors.zip).clear().type(customer.zip);
  cy.get(selectors.notes).clear().type(customer.notes);
}

export function saveModal(){
  cy.get(selectors.saveButton).scrollIntoView().click({force:true});
}

export function deleteCustomer(){
  cy.get(selectors.deleteButton).scrollIntoView().click({force:true});
}

export function validateUserInput(customer: Customer){
  cy.get(selectors.firstName).should('have.value', customer.firstName);
  cy.get(selectors.lastName).should('have.value', customer.lastName);
  cy.get(selectors.email).should('have.value', customer.email);
  cy.get(selectors.addressLine1).should('have.value', customer.addressLine1);
  cy.get(selectors.addressLine2).should('have.value', customer.addressLine2);
  cy.get(selectors.city).should('have.value', customer.city);
  cy.get(selectors.state).should('have.value', customer.state);
  cy.get(selectors.zip).should('have.value', customer.zip);
  cy.get(selectors.notes).should('have.value', customer.notes);
}