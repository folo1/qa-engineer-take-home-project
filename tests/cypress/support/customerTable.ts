import { Customer } from "./customer";

export const selectors = {
    addButton: '[data-testid="add-customer-button"]',
    row: '[data-testid*="row-"]',
}

export function addButton(){
    cy.get(selectors.addButton).click();
}

export function editButton(email: string){
    cy.get(selectors.row).contains(email).parent().contains("Edit").click();
}

export function verifyDelete(customer: Customer){
    cy.get(selectors.row).contains(customer.email).should('not.exist');
}

export function validateTableRow(customer: Customer){
    cy.get(selectors.row).contains(customer.email).parent().contains(customer.firstName).parent().contains(customer.lastName);
}