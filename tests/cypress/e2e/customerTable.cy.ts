import { postCustomer } from "../support/api/apiFunctions";
import { Customer, generateCustomer } from "../support/customer";
import { deleteCustomer, fillModal, saveModal, validateUserInput } from "../support/customerModal";
import { addButton, editButton, validateTableRow, verifyDelete } from "../support/customerTable";


describe('Customer Table UI Tests', () => {
  beforeEach(() => cy.visit("http://localhost:5173"));

  it('User can add new customer', () => {
    const customer: Customer = generateCustomer();

    addButton();
    fillModal(customer);
    saveModal();
    validateTableRow(customer);
    editButton(customer.email);
    validateUserInput(customer);
  });

  it('User can edit a customer entry', () => {
    cy.wrap(null).then(async () => {
      const customer: Customer = await postCustomer();
      const newCustomer: Customer = generateCustomer();

      validateTableRow(customer);
      editButton(customer.email);
      fillModal(newCustomer);
      saveModal();
      validateTableRow(newCustomer);
      editButton(newCustomer.email);
      validateUserInput(newCustomer);
    });
  });

  it('User can delete a customer entry', async () => {
    const customer: Customer = await postCustomer();

    validateTableRow(customer);
    editButton(customer.email);
    deleteCustomer();
    verifyDelete(customer);
  });
});
