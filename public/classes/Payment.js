export class Payment {
    //constructor auto assigns defined values to properties when Invoice() is assigned to a variable.
    //this will only work with access modifiers.
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
