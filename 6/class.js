'use strict';
// class : template
// object : instance of a class

/*
 * 1. Class declarations
*/
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const lsm = new Person('lsm', 20);
console.log(lsm.name);
console.log(lsm.age);
lsm.speak();

/*
 * 2. Getter and Setters
*/
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0: value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); 

/*
 * 3. Fields (public, private)
*/
class Experiment {
    publicFiedld = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicFiedld); // 2
console.log(experiment.privateField); // undefined

/*
 * 4. Static properties and methods
*/
class Article {
    
    static publisher = 'Dream Coding';
    
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

/*
 * 5. Inheritance 상속
 * a way for one class to extend another class.
*/
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('△');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of \n △
console.log(triangle.getArea()); // 200

/*
 * 6. Class checking: instanceOf
*/
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true