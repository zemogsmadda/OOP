'use strict';

//..........................................................................
// Constructor functions and the new operator 


//Constructor functions always start with a capital letter
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function() {
    //     console.log(2020 - this.birthYear);
    // }
}

const paul = new Person(`Paul`, 1996);
console.log(paul)

const matilda = new Person(`Matilda`, 2001);
const jack = new Person(`Jack`, 1975);

console.log(matilda.birthYear);

console.log(paul instanceof Person); //true


//Behind the scenes these 4 steps happen
// 1. New {} is created. An empty object
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}



//..........................................................................
// Prototypes

console.log(Person.prototype);

// Best way to input method into a constructor function
Person.prototype.calcAge = function () {
    console.log(2020 - this.birthYear);
}

paul.calcAge();

console.log(Person.prototype.isPrototypeOf(paul));

// Prototypes are the prototype of linked objects
// Own properties are the ones written directly in the `blueprint` object. 
// Prototype is used to not hard code in the original `bluprint` object.
// The called object (example: paul) has access to it but its not directly linked to it

Person.prototype.species = `Homo sapiens`;
console.log(paul.species);

// How to check if it is prototyped or hardcoded 
console.log(paul.hasOwnProperty(`firstName`)); //true
console.log(paul.hasOwnProperty(`species`)); // false