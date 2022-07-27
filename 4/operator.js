/*
 * 1. String concatenation
*/
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1+2}`); //string literals: 1 + 2 = 3

/*
 * 2. Numeric operatiors
*/
console.log(1 + 1); //add 2
console.log(1 - 1); //substract 0
console.log(1 / 1); //divide 1
console.log(1 * 1); //multiply 1
console.log(5 % 2); //remainder 1
console.log(2 ** 3); //exponentiation 8

/*
 * 3. Increment and decrement operators
*/
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// PreIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);//preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);//preDecrement: 3, counter: 2

/*
 * 4. Assignment operators
*/
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

/*
 * 5. Comparison operators
*/
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

/*
 * 6. Logical operators
*/
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// or는 하나라도 true가 나오면 뒤쪽을 신경쓰지 않기 때문에 value1이 참이면  check()의 출력이 안된다.
// 심플한 것들을 앞쪽에 둔다.
console.log(`or: ${value1 || value2 || chech()}`); 

// && (and), finds the first falsy value
// and는 하나라도 false가 나오면 뒤쪽을 신경쓰지 않는다.
console.log(`and: ${value1 && value2 && chech()}`); 

// and는 간단하게 null 체크할 때 많이 쓰임
// nullableObject && nullableObject.something
if(nullableObject != null){
    nullableObject.something;
}

function check() {
    for(let i = 0; i < 10; i++){
        console.log('출력이 될까 안될까?');
    }
    return true;
}

// ! (not)
console.log(!value1);

/*
 * 7. Equality
*/
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

//object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false 
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

/*
 * 8. Conditional operators: if
 * if, else if, else
*/
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

/*
 * 9. Ternary operator: ?
 * condition ? value1 : value2;
*/
console.log(name === 'ellie' ? 'yes' : 'no');

/*
 * 10. Switch statement
 * use for multiple if checks
 * use for enum-like value check
 * use for multiple type checks in TS
*/
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

/*
 * 11. Loops
*/
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0 ; i--){
    console.log(`forL ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0 ; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0 ; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0 ; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}