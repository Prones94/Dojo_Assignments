// Predict the Output!

// Problem 1
const cars =['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars 
const [ , otherRandomCar ] = cars
console.log(randomCar); // Tesla 
console.log(otherRandomCar); // Mercedes

const employee = {
    name: 'Elon',
    age : 47,
    company: 'Tesla'
}
const {name : otherName} = employee
// console.log(name); // Reference Error: name is not defined
console.log(otherName); // Would reference Elon if error  was commented out

const person = {
    name: 'Phil Smith',
    age: 47,
    height : '6 feet'
}
const password = '12345';
const { password : hashedPassword } = person
console.log(password);
console.log(hashedPassword);

const numbers = [8,2,3,5,6,1,67,12,2]
const [, first] = numbers // 2
const [,,,second] = numbers  // 5
const [,,,,,,,,third] = numbers // 2
console.log(first == second); // False
console.log(first == third); // True

const lastTest = {
    key : 'value',
    secondKey : [1,5,1,8,3,5]
}
const { key } = lastTest
const { secondKey } = lastTest
const [, willThisWork] = secondKey
console.log(key); // value
console.log(secondKey); // [1,5,1,8,3,5]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5


