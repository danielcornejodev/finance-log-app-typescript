import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    //constructor auto assigns defined values to properties when Invoice() is assigned to a variable.
    //this will only work with access modifiers.
    constructor(
      readonly recipient: string, 
      private details: string, 
      public amount: number
      ){}

    format() {
      return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
  }
  