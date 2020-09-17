var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27}
];

// /*
//     How would you print John's age?
//     How would you print/log the name of the first object?
//     How you print/log the name and age of each user using a for loop? 
// */


// console.log(users[1].age);
// console.log(users[0].name);
for(let user in users ){
    console.log(users[user].name + " - " + users[user].age);
}

// var glazedDonuts = [
//     {
//       frosting: 'glazed',
//       style: 'cake',
//       type: 'old fashioned',
//       age: '45',
//       time: 'minutes'
//     },
//     {
//       frosting: 'glazed',
//       style: 'yeast raised',
//       type: 'regular',
//       age: '5',
//       time: 'minutes'
//     },
//     {
//       frosting: 'glazed',
//       style: 'yeast raised',
//       type: 'jelly filled',
//       age: '1',
//       time: 'seconds'
//     }
//   ];

// for (let donut in glazedDonuts){
//     console.log(glazedDonuts[donut].frosting);
// }