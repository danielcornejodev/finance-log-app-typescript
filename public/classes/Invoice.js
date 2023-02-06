export class Invoice {
    //constructor auto assigns defined values to properties when Invoice() is assigned to a variable.
    //this will only work with access modifiers.
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
