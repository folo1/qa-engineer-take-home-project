import {Customer} from '../customer';

export function validateCustomerResponse(actual: Customer, expected: Customer): void {
    if (expected.id){
        expect(actual.id).to.eq(expected.id);
    }
    else{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(actual.id).to.not.be.null;
    }
        expect(actual.firstName).to.equal(expected.firstName);
        expect(actual.lastName).to.equal(expected.lastName);
        expect(actual.email).to.equal(expected.email);
        expect(actual.addressLine1).to.equal(expected.addressLine1);
        expect(actual.addressLine2).to.equal(expected.addressLine2);
        expect(actual.city).to.equal(expected.city);
        expect(actual.state).to.equal(expected.state);
        expect(actual.zip).to.equal(expected.zip);
        expect(actual.notes).to.equal(expected.notes);

}