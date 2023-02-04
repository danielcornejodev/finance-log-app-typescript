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
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));

// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
//cannot push a type other than string in array since all elements in array names are of type string. 
//cannot change type of array to say a single string. 
// names.push(3);
// names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];
//can push either string or number in this array since those are the defined types. 

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects. Properties in object work the same way as a defined variable with a set type. Cannot change type later on. 
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
//cannot add additional properties to an object. 
// ninja.skills = ['fighting', 'sneaking']

//can update values of object as a whole object but must match structure of initial object. 
ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: ['running'],
};

//let character: string;

let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
//let ninjas: string[]; 
//if you do not initialize as an empty array to begin with, you cannot use the push method. 
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types means one or more of several differen types. 
//string or number or boolean. paranthesis are required if before an array. 
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

//can define union types on a variable. Paranthesis are not needed for normal variable.
let uid: string|number;

// objects
//if you define type as an object, TSC would actually allow an array since objects are techanically arrays. 
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

//more specific to set strict types on property values. 
let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };

//careful when using any since it defeats the benefits of using Typescript to begin with. 
let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

//any is often seen on an empty array when you need to push multiple types into it. Can be useful to use any in this situation. 
let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);

//Note Function type must be in capital.
let greet: Function = () => {
  console.log('hello, world');
}

greet = 'hello';

greet = () => {
  console.log('hello, again');
}

//Question mark means that the parameter is optional. if you use the OR symbol as below, the question mark is not needed since you set a default value. 
//because only a console.log is set and no actual return value then the type is void. 
//if this were compliled to JS it would appear as undefined. 
const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

//You can explicitly specify the return type. In this case :number after the input paranthesis. 
const minus = (a: number, b: number): number => {
  return a + b;
}

//inferred type number
let result = minus(10,7);
console.log(result);