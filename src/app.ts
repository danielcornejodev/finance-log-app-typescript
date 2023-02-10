// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = 'luigi';
// // age = 'yoshi';
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
//defines strict type number as parameter. Typescript will not compile to JS if doesnt match type. 
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(area('hello'));
// console.log(circ(7.5));
// arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
//cannot push a type other than string in array since all elements in array names are of type string. 
//cannot change type of array to say a single string. 
// names.push(3);
// names[1] = 3;
// let numbers = [10, 20, 12, 15];
// numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
// let mixed = ['ken', 4, 'chun-li', 8, 9];
//can push either string or number in this array since those are the defined types. 
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// objects. Properties in object work the same way as a defined variable with a set type. Cannot change type later on. 
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// ninja.age = '30';
//cannot add additional properties to an object. 
// ninja.skills = ['fighting', 'sneaking']
//can update values of object as a whole object but must match structure of initial object. 
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
// skills: ['running'],
// };
//let character: string;
// let character: string = 'mario';
// let age: number;
// let isLoggedIn: boolean;
// age = 'luigi';
// age = 30;
// isLoggedIn = 25;
// isLoggedIn = true;
// arrays
//let ninjas: string[]; 
//if you do not initialize as an empty array to begin with, you cannot use the push method. 
// let ninjas: string[] = [];
// ninjas.push('ryu');
// ninjas.push('chun-li');
// console.log(ninjas);
// union types means one or more of several differen types. 
//string or number or boolean. paranthesis are required if before an array. 
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(false);
// mixed.push(20);
// console.log(mixed);
//can define union types on a variable. Paranthesis are not needed for normal variable.
// let uid: string|number;
// objects
//if you define type as an object, TSC would actually allow an array since objects are techanically arrays. 
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };
//more specific to set strict types on property values. 
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// };
// ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
//careful when using any since it defeats the benefits of using Typescript to begin with. 
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi' };
// console.log(age);
//any is often seen on an empty array when you need to push multiple types into it. Can be useful to use any in this situation. 
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
// let ninja: { name: any, age: any };
// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);
// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);
//Note Function type must be in capital.
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
//Question mark means that the parameter is optional. if you use the OR symbol as below, the question mark is not needed since you set a default value. 
//because only a console.log is set and no actual return value then the type is void. 
//if this were compliled to JS it would appear as undefined. 
// const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c);
// }
// add(5, 10, 'ninja');
//You can explicitly specify the return type. In this case :number after the input paranthesis. 
// const minus = (a: number, b: number): number => {
//   return a + b;
// }
//inferred type number
// let result = minus(10,7);
// console.log(result);
//Aliases
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StrigOrNum };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }
// const greetAgain = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }
// let greet: Function;
// example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// }
// example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// example 3
// let logDetails: (obj: {name: string, age: number}) => void;
//alternatively you can define an alias and plug it into your function parameter TS below. 
// type person = {name: string, age: number};
// logDetails = (ninja: {name: string, age: number}) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
//TypeScript Tutorial #11 - The DOM & Type Casting
//TSC knows that HTML element is an HTMLAnchorElement because is seleted by tag.
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//If selected by class, TSC will not recognize what type of HTML element it is so you have to define it manually. 
//const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children); 
// inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
//prevent default prevents the page from refreshing upon submission, which is the default behavior.
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
//Tutorial #12 Classes 
//this refers to the instance of the object we are creating based on the class Invoice. 
//Whenever we create a new invoice object based on the class Invoice, the constructor will run and assing values. 
//format is considered a method in this code. 
// class Invoice {
//defining three properties
// readonly client: string;
// private details: string;
// public amount: number;
//taking in three parameters.
// constructor(c: string, d: string, a: number){
//assigning paramter values to properties listed in above code block.
//   this.client = c;
//   this.details = d;
//   this.amount = a;
// }
//if you have access modiiers, you can refactor code to be much more consice as follows:
//important to remember to import as a javascript file and not a typescript file. 
//browser will import a JS file not a TS file. 
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'w eb work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
;
//array that only holds objects that implements interface. 
// let docs = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//you can have different objects of type IsPerson that would take in different values.
// const me = {
//     name: 'Daniel',
//     age: 33,
//     speak(text) {
//         console.log(text);
//     },
//     spend(amount) {
//         console.log('I spend', amount);
//         return amount;
//     }
// };
//examples of an interface selection. 
// const greetPerson = (person) => {
//     console.log(`hello, ${person.name}`);
// };
// greetPerson(me);
// console.log(me);
//instantiates class Invoice and creates an object based on class Invoice. 
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
//only objects that are created using invoice class can be pushed inside invoice array. 
//: Invoice[] states that invoices can only be an array of type Invoice objects. The equals [] initializes an empty array. 
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });
// invoices.forEach(inv => {
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// });
//use access modifiers to limit ability to change values down the road.
// invOne.client = "yoshi";
// console.log(invoices);
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// list template instance
//Need to specify important with the exclamation mark since error says could be null. 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

// GENERICS
//here we have defined that function accepts an object that must contain a name property/key with value of string. Other properties may be inside of object. 
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let testDocOne = addUID({name: 'yoshi', age: 40});


console.log(testDocOne);

// with interfaces
//an interface defines how an object should look. 
//T in this examples says that data can be of any generic type of the object that implements this Resource.
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  data: ['bread', 'milk']
};

console.log(docThree, docFour);