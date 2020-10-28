/*
    -> GIVEN
    console.log(example)
    var example = "i'm the example!";
    -> AFTER HOISTING BY THE INTERPRETER
    var example
    console.log(example) => logs undefined
    examp;e = "I'm the example!"
 */

//  console.log(example);
//  let example = "I'm the example!";
// ReferenceError: Cannot access 'example' before initialization at Object.<anonymous>

 // #1
 console.log(hello);
 var hello = 'world' // returns undefined

 // #2
let needle = 'haystack'
test() // returns magnet
function test(){
    var needle = 'magnet';
    console.log(needle); 
}

// #3
let brendan = 'super cool'
function print(){
    brendan = 'only okay'
    console.log(brendand);
}
console.log(brendan); // returns super cool

// #4
let food = 'chicken'
console.log(food); // logs chicken first
eat()
function eat() {
    let food = 'half-chicken'
    console.log(food); //logs half-chicken, as food was already defined in the global scope
    food = 'gone'
}

// #5
console.log(food);
const mean = function() {
    let food = "chicken"
    console.log(food);
    food = "fish"
    console.log(food);
}
mean(); 
console.log(food);

// #6
let genre = 'disco' // disco is declared here
console.log(genre); // calls undefined
let rewind = function() {
    genre = "rock"
    console.log(genre); 
    var genre = "r&b"
    console.log(genre);
}
rewind() // logs rock, then r&b
console.log(genre); // logs disco last

// #7
let dojo = "san jose"
console.log(dojo); // logs san jose first
learn()
function learn() {
    let dojo="seattle"
    console.log(dojo); // logs seattle next
    dojo="burbank"
    console.log(dojo); // dojo is then reassigned to burbank
}
console.log(dojo); // logs san jose again due to dojo being declared in global scope already

// #8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65)); // Creates a dojo object => {name: 'Chicago', students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); // Runs TypeError, due to dojo being a constant variable and cannot be reassigned
function makeDojo(name, students) {
    const dojo = {}
    dojo.name = name
    dojo.students = students
    if(dojo.students > 50){
        dojo.hiring = true
    } else if (dojo.students <= 0){
        dojo.name = "closed for now";
    }
    return dojo
}