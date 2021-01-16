'use strict';

//..........................................................................
// Constructor functions and the new operator 
/*

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

paul.hasOwnProperty(`test`);

//..........................................................................
// Prototypal inheritance in built in objects

console.log(paul.__proto__);

//Object.prototype (top of the prototype chain)
console.log(paul.__proto__.__proto__); //The prototype's prototype
console.log(paul.__proto__.__proto__.__proto__); //Null

console.log(Person.prototype.constructor) //Will print the person constructor function

const arr = [3, 6, 7, 6, 7, 8, 1, 2, 34, 5]; //The same as typing new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

console.log(arr);

// Extending the prototype of a built in object is a bad idea 
// Future versions of javascript may have a method with the same name

Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.log(h1.__proto__);
*/

//..........................................................................
// Coding challenge 1

/* 
1. Use a constructor function to implement a car. A car has a make and a speed property.
The speed property is the current speed of the car in km/h;

2. Implement an `accelerate` method that will increase the car's speed by 10, and log the 
new speed to the console;

3. Implement a `brake` method that will decrease the car's speed by 5, and log the new speed
to the console;

4. Create 2 car objects and experiment with calling `accelerate` and `brake` multiple times 
on each of them.

Data car 1: `BMW` going at 120 km/h
Data car 2: `Mercedes` going at 95 km/h
*/
/*
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    const newSpeed = this.speed += 10;
    console.log(newSpeed);
}

Car.prototype.brake = function() {
    const newSpeed = this.speed -= 5;
    console.log(newSpeed);
}

const BMW = new Car(`BMW`, 150);
BMW.accelerate();
BMW.accelerate();
BMW.brake();
*/

//..........................................................................
// ES6 Classes

/*
// Class expression
// const PersonClE = class {

// }

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to the prototype property
    calcAge() {
        console.log(2020 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2020 - this.birthYear;
    }

    // Do this when trying to set a property that already exists.
    set fullName(name) {

        if(name.includes(` `)) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // Static method lesson
    static hey() {
        console.log(`Hey there`);
        console.log(this);
    }
}

const jessica = new PersonCl(`jessica davis`, 1991);
console.log(jessica);
jessica.calcAge();

// Take this out and put in the class declaration and it will work the same way

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// From the setter and getter lesson
console.log(jessica.age);
console.log(jessica.fullName);

// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl(`Walter White`, 1965);
console.log(walter);


// In conclusion I think classes are better than constructor function since it puts every
// method in one enclosed code block compared to the constructor which can get out of hand 
// real quick.
*/

//..........................................................................
// Setters and getters
/*
const account = {
    owner: `Paul`,
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

// Can call it as a property
console.log(account.latest);

// Can add to the data set in the object like it is a property
account.latest = 50;
console.log(account.movements);
*/

//..........................................................................
// Static methods

// Person.hey = function() {
//     console.log(`Hey there`);
// };

// Person.hey is not inherited and is not in the prototype therefore you couldn't call it like a property
// Person.hey();
// paul.hey(); 

// Would not work since it is a static method and not an instance
// Not available to the instances such as jessica
// console.log(jessica.hey());

//..........................................................................
// Object create

/*
// Object create is not used that much
const PersonProto = {
    calcAge() {
        console.log(2020 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 1996;
steven.calcAge();
console.log(steven.__proto__);

// How to programatically write using object create
const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calcAge();
*/

//..........................................................................
// Coding challenge 2

/*
1. Re-create challenge 1, but this time using an ES6 class
2. Add a getter called `speedUS` which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called `speedUS` which sets the current speed in mi/h (but converts it to 
    km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the accelarate and brake methods, and with the getter and
    setter. 

DATA CAR 1: `Ford` going at 120 km/h
*/
/*
class HowFast {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 5;
    }

    // The difference between getter and using functions is that getters have simpler syntax when called.
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
}

const ford = new HowFast(`Ford`, 120);

console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;

console.log(ford);
*/

//..........................................................................
// Inheritance between classes : constructor functions

// Don't do

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//     console.log(2020 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.course = course;
// }

// Student.prototype.introduce = function(){ 
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student(`Mike`, 2020, `Computer Science`);
// console.log(mike);

// mike.introduce();

// Do
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2020 - this.birthYear);
};

// Inherited the Person class variables 
const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
// Object.create will make an empty prototype which is why it needs to come before any
// other prototype declaration

Student.prototype = Object.create(Person.prototype)

// This doesnt work because it will say that the student and person should be the same
// Student.prototype = Person.prototype

Student.prototype.introduce = function(){ 
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student(`Mike`, 1996, `Computer Science`);
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// Will redirect the constructor function from person to student
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//..........................................................................
// Coding challenge 3
// Constructor function inheritance

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD
    "class" of Car. Besides a make and current speed, the EV also has the current 
    battery charge in % (`charge` property);

2. Implement a `chargeBattery` method which takes an argument `chargeTo` and sets the battery 
    charge to `chargeTo`;

3. Implement an `accelerate` method that will increase the car's speed by 20, and decrease the
    charge by 1%. Then log a message like this: `Tesla going at 140 km/h, with a charge of 22%;

4. Create an electric car object and experiment with calling `accelerate`, `brake` and `chargeBattery`
    (charge to 90%). Notice what happens when you `accelerate`! HINT: Review the definition of 
    polymorphism.

    DATA CAR 1: `Tesla` going at 120 km/h, with a charge of 23%
*/

/*
const Car = function (make, speed) {
    this.maker = make;
    this.speed = speed; 
}

Car.prototype.accelerate = function() {
    this.speed += 10;
}

Car.prototype.brake = function() {
    this.speed -= 10;
}

const EV = function(make, speed, charge) {
    // Inheritance from the car class
    Car.call(this, make, speed);
    this.charge = charge;
}

// Links all the prototype of car to EV
EV.prototype = Object.create(Car.prototype);
// EV.prototype = Car.prototype;

// Prototype for the EV constructor
// Any input from the chargeBattery method will change the charge of the initial charge value 
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

// Will override the other accelerate method because this is the direct prototype of EV
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
}

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
console.log(tesla)

// console.log(Object.create);
// console.log(Object.create(Car.prototype));
// console.log(Car.prototype);

console.log(EV);
console.log(EV.prototype);
console.log(tesla);
*/

//..........................................................................
// Inheritance using classes

/*
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2020 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2020 - this.birthYear;
    }

    set fullName(name) {

        if(name.includes(` `)) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log(`Hey there`);
    }
}
*/

// If you are just trying to inherit the parent class word for word no need to make a constructor function

/*
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always need to happen first!
        // You cant use this keyword otherwise
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    // Override the constructor function method from the parent
    calcAge() {
        console.log(`I'm ${2020 - this.birthYear} years old`);
    }
}

const martha = new StudentCl(`Martha Jones`, 2012, `Computer Science`);
// const martha = new StudentCl(`Martha Jones`, 2012);

console.log(martha);
martha.introduce();
martha.calcAge();
*/

//..........................................................................
// Object.create prototype chain

/*
const PersonProto = {
    calcAge() {
        console.log(2020 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

// Using inheritance 
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName}`)
}

const jay = Object.create(StudentProto);
jay.init(`Jay`, 1002, `Computer Science`);
jay.introduce();
jay.calcAge();

console.log(jay);
*/

//..........................................................................
// Another class example

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

/*
class Account {
    // 1) Public field (not on the prototype, in the instances)
    locale = navigator.language;
    
    // 2) Private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // Protected property
        // this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) Private methods
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account(`Paul`, `USD`, 1111);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(140);

// Need for data encapsulation
acc1.requestLoan(1000);
// acc1.approveLoan(1000);

console.log(acc1);

console.log(acc1.pin);
console.log(acc1.movements);

// Allows others to access movements but not override it
console.log(acc1.getMovements());

// Will come out as syntax error
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
*/

//..........................................................................
// Data encapsulation
/*
As seen above, the movements have an underscore to tell developers on the team not to touch that 
outside of the class.
*/

//..........................................................................
// Chaining methods

/*
// Add return this to the methods above
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

console.log(acc1 instanceof Account);

*/


//..........................................................................
// Coding Challenge 4

/*
1. Recreate challenge #3, but this time using ES6 classes: create an `EVCl` 
    child class of the `CarCl` class.
2. Make the `charge` property private;
3. Implement the ability to chain the `accelerate` and `chargeBattery` methods of this
    class, and also update the `brake` method in the Car class. Then experiment with chaining.

DATA CAR 1: `Rivian` going at 120km/h, with a charge of 23% 
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`This ${this.make} is going ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`This ${this.make} is going ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        this.speed /= 1.6;
    }

    set speedUS(newSpeed) {
        this.speed = newSpeed * 1.6;
    } 
}

class EVCl extends CarCl {

    #charge;
    constructor(make, speed, charge) {
        // Super needs to always happen first before the other unique vars
        // Super is responsible for creating the this keyword
        super(make, speed)
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--
        console.log(`This ${this.make} is going ${this.speed} km/h with a charge of ${this.#charge}`);
        return this;
    }

    getCharge() {
        return this.#charge;
    }
}

const tesla = new EVCl(`Tesla`, 120, 50);
console.log(tesla);

tesla.accelerate().chargeBattery(70);
console.log(tesla);

