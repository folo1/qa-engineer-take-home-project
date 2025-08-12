import { postCustomer } from "../support/api/apiFunctions";
import { validateCustomerResponse } from "../support/api/validateResponse";
import { Customer, generateCustomer } from "../support/customer";

const url: string = "http://localhost:3000/api/customers";

describe('API Tests for Customer Table', () => {
    it('POST to /customers', () => {
        const customer = generateCustomer();
        cy.request({
            method: 'POST',
            url: url,
            body: customer,
        }).then((response) => {
            expect(response.status).to.eq(201);
            validateCustomerResponse(response.body, customer);
        });
    });

    it('GET to /customers', async () => {
        const customer = await postCustomer();
        cy.wrap(null).then(() => {
            cy.request({
                method: 'GET',
                url: url
            }).then((response) => {
                const customers: Customer[] = response.body;
                const foundCustomer: Customer = customers.find((cust: Customer) => (cust.id === customer.id));
                expect(response.status).to.eq(200)
                validateCustomerResponse(foundCustomer, customer);
            });
        });
    });

    it('GET to /customers/customerId/details', async () => {
        const customer = await postCustomer();
        cy.wrap(null).then(() => {
            cy.request({
                method: 'GET',
                url: url + `/${customer.id}/details`,
                body: customer
            }).then((response) => {
                expect(response.status).to.eq(200);
                validateCustomerResponse(response.body, customer);
            });

        });
    });

    it('PUT to /customers/customerId', async () => {
        const customer = await postCustomer();
        const newCustomer = generateCustomer();

        cy.request({
            method: 'PUT',
            url: url + `/${customer.id}`,
            body: newCustomer
        }).then((response) => {
            expect(response.status).to.eq(201);
            validateCustomerResponse(response.body, newCustomer);
        });
    });

    it('DELETE to /customers/customerId', async () => {
        const customer = await postCustomer();

        cy.request({
            method: 'DELETE',
            url: url + `/${customer.id}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            expect(response.body).to.be.empty;
        });
    });

});
