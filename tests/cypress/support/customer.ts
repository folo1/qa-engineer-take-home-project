import { faker } from '@faker-js/faker';

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  notes?: string;
  id?: string;
};

export function generateCustomer(): Customer {
  const customer: Customer = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    addressLine1: faker.location.streetAddress(),
    addressLine2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    notes: faker.word.words(),
  }

  return customer;
}