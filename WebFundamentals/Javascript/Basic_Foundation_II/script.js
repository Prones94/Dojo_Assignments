// 1. Biggie Size
const biggieSize = (arr) => {
    let newArr = arr.map(el => (el > 0) ? "big" : el)
    return newArr
}

// 2. Print Hi, return Low
const lowHi = (arr) => {
    console.log(Math.min(...arr))
    return Math.max(...arr);
}

// 3. Print one, Return Another
const printReturn = (arr) => {
    console.log(arr[arr.length - 2]);
    let newArr = arr.find(el => el % 2 !== 0)
    return newArr
}

// 4. Double Vision
const double = arr => {
    let newArr = arr.map(el => el*2)
    console.log(arr)
    console.log(newArr)
}

// 5. Count Positives
const countPositives = (arr) => {
    let count = 0;
    arr.forEach(el => (el > 0) ? count++ : el)
    arr[arr.length - 1] = count;
    return arr
}

// 6. Evens and Odds
const evensAndOdds = arr => {
    /*
    Have odd or even counters
    Have current 
    if current is even and odd === 0
        add 1 to even
        if even === 3
            print message
    if current is even and odd !== 0
        odd = 0
        even++
    if current is odd and even === 0
        odd++
        if odd === 3
            print message
     */
    let odd, even = 0;
    for (let i = 0; i< arr.length; i++){
        if(arr[i] % 2 === 0 && odd === 0){
            even++;
            if(even === 3){
                console.log(`Even more so!`)
            }
        }
        if(arr[i] % 2 === 0 && odd !== 0){
            odd = 0;
            even++;
        }
        if (arr[i] % 2 !== 0 && even === 0){
            odd++;
            if(odd === 3){
                console.log(`That's odd!`)
            }
        }
        if(arr[i] % 2 !== 0 && even !== 0){
            even = 0;
            odd++
        }
    }
}

// 7. Increment the Seconds
// const increment = arr => {
//     for (let i in arr){
//         if(i % 2 !== 0) {
//              arr[i] += 1
//         }
//         console.log(`Value: ${arr[i]}`);
//     }
//     return arr
// }
// let incrementing = increment([1,2,3,4,5,6])
// console.log(incrementing);

// 8. Previous Lengths
// const previousLengths = arr => {
//     arr.reduceRight((_,el) => console.log(el.length),[...arr])
// }

// previousLengths(['banana','strawberry','cherries'])

// 9. Build Seven
// const addSeven = arr => {
//     let newArr = arr.map(el => el+=7)
//     console.log(newArr);
//     console.log(arr);
// }
// addSeven([1,2,3,4,5])

// 10. Reverse Array
/*
    PsuedoCode
        1. Start at the beginning of the array
        2. Move through the array until we reach the halfway point
        3. Set element at i equal to variable
        4. Set the first element equal ot the last, and last element to the first
        5. Move inward with each loop
*/
// const reverseArray = arr => {
//     for (let i = 0; i <= Math.floor((arr.length  -1 ) / 2); i++) {
//         let el = arr[i]
//         arr[i] - arr[arr.length - 1 - i]
//         arr[arr.length - 1 - i] = el
//     }
//     return arr
// }

// 11. Outlook Negative
// const outlook = arr => {
//     let newArr = arr.map(el => {return el * -1})
//     console.log(newArr);
// }

// console.log(outlook([1,2,3,4,5]));

// 12. Always Hungry
// const hungry = arr => {
//     count = 0;
//     for (let i of arr){
//         console.log(i);
//         if(i === 'food'){
//             count++
//             console.log('Yummy');
//         }
//     }
//     if (count === 0){
//         console.log(`I'm hungry`);
//     }
// }

// 13. Swap Towards the Center
const swap = arr => {
    for (let i = 0; i <= Math.floor((arr.length - 1) /2); i++){
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length = 1 - i] = temp;
        console.log(temp);
    }
    // console.log(arr);
}
swap([1,2,3,4,5,6,7,8])