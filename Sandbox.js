//let age = 20;
//let year = 2020;

//log things to console
//console.log(age, year);

/* age = 21;
console.log(age);

const points = 100;
console.log(points); */

/*var score = 75;
console.log(score); */

// Strings 
/*console.log('Hello, World')

let email = 'sheilavazquez2201@gmail.com';
console.log(email);

// String concatenation
let firsName = 'Sheila';
let lastName = 'Vazquez';

let fullName = firsName + '' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[2]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')
console.log(index); */

// Common string methods

//let email = 'sheilavazquez2201@gmail.com';

// let result = email.lastIndexOf('v');}

//let result = email.slice(0,6);

//let result = email.substr(6,7);

//let result = email.replace('s', 'k');

//let result = email.replace('z', 's');

//console.log(result);

//let radius = 10;
//const pi = 3.14;

//console.log(radius, pi);

// -- Math operators +, -, *, /, **, %

//console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;

// -- Order of operation - B I D M A S 

//let result = 5 * (10-3)**2

//console.log(result);

//let likes = 10; 

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// --NaN - not a number

//console.log(5 / 'hello');
//console.log(5 *  'hello');

//let result = 'the blog has ' + likes + ' likes';
//console.log(result); 

// -- Template strings 
//const title = 'Best Reads of 2020';
//const author = 'Sheila';
//const likes = '20';

// --Concatenation way 
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

// -- Template string way 
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

// -- Creating html templates
/* let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span> This blog has ${likes} likes</span>
`;

console.log(html); */

//let students = ['Jhoedy', 'Adrian','Armando'];

/* students[1] = 'Indurain';
console.log(students[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['Jhoedy','Sheila', 20, 19];
console.log(random); */

// --Arrays methods

//let result = students.join('-');
//let result = students.indexOf('Armando');
//let result = students.concat(['Indurain', 'Jesus']);
//let result = students.push('Indurain');
//result = students.pop();

//console.log(result);

// -- Booleans & Comparisons
//console.log(true, false, "true", "false");

// -- Methods can return booleans
//let email = 'sheilavazquez2201@gmail.com';
//let names = ['Indurain', 'Jesus', 'Eduardo'];

//let result = email.includes('!');
//let result = names.includes('Elizabeth');
//console.log(result);

// -- Comparison Operators
//let age = 25;

// console.log(age == 25);
// console.log(age == 25);
// console.log(age != 25);
// console.log(age > 25);
// console.log(age < 25);
// console.log(age <= 25);
// console.log(age >= 25);

//let name = 'alice';

// console.log(name == 'alice');
// console.log(name == 'Alice');
// console.log(name > 'Bruno');
// console.log(name > 'Alice');

// -- Loose Comparison (Different types can still be equal)

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != '25');
//console.log(age != '25');

// -- Strict Comparison (Different types cannon be equal)

//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');

// -- Types Conversion
//let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('Hello');
//let result = String(50);
//let result = Boolean(0);
//let result = Boolean ('0');

//console.log(result, typeof result);