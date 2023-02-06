import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    //constructor auto assigns defined values to properties when Invoice() is assigned to a variable.
    //this will only work with access modifiers.
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number
      ){}

    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  