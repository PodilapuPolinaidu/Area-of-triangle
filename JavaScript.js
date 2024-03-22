// Area of triangle
// const b = 5;
// const h = 6;
// const area = 1/2*(b*h);
// console.log(`The area of a triangle is ${area}`);/

     // If we know All the three sides
const a = parseInt(prompt("Enter a"));
const b = parseInt(prompt("Enter b"));
const c = parseInt(prompt("Enter c"));
const s = (a + b + c)/2;
const area = Math.floor(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
console.log(`The area of triangle is ${area}`);