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
var needle = 'haystack'
test() // returns magnet
function test(){
    var needle = 'magnet';
    console.log(needle); 
}

// #3
var brendan = 'super cool'
function print(){
    brendan = 'only okay'
    console.log(brendand);
}
console.log(brendan); // returns super cool

// #4
var food = 'chicken'
console.log(food); // logs chicken first
eat()
function eat() {
    food = 'half-chicken'
    console.log(food); //logs half-chicken, as food was already defined in the global scope
    var food = 'gone'
}

// #5
// mean(); // runs an error here, mean is called before it was defined
// console.log(food);
// var mean = function() {
//     food = "chicken"
//     console.log(food);
//     var food = "fish"
//     console.log(food);
// }
// console.log(food);

// #6
console.log(genre); // calls undefined
var genre = 'disco' // disco is declared here
rewind() // logs rock, then r&b
function rewind() {
    genre = "rock"
    console.log(genre); 
    var genre = "r&b"
    console.log(genre);
}
console.log(genre); // logs disco last

// #7
dojo = "san jose"
console.log(dojo); // logs san jose first
learn()
function learn() {
    dojo="seattle"
    console.log(dojo); // logs seattle next
    var dojo="burbank"
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
        dojo = "closed for now";
    }
    return dojo
}