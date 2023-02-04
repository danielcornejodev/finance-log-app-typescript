var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
//defines strict type number as parameter. Typescript will not compile to JS if doesnt match type. 
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//cannot push a type other than string in array since all elements in array names are of type string. 
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
//can push any type 
mixed.push('ryu');
mixed.push(10);
mixed.push(5);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
