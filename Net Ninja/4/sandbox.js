// arrays
var names = ['luigi', 'mario', 'yoshi']; // declare and assign an array
// names = 'lil nas' // cannot change an array to a string
names.push('toad');
// names.push(3); // error and wont compile
// names.[0] = 3; // error and wont compile
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); // error and wont compile
// numbers[1] = 'shaun'; // error and wont compile
var mixed = ['ken', 4, 'chun-li', 8, 9]; // array that contains two types
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // error and wont compile
// ninja.skills = ['fighting', 'sneaking'] // cannot add variables to an object
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: [] // doesnt let you add another variable cos it doesnt match the initial object
};
