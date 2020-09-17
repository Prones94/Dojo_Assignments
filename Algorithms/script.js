// var num = 1
// while (num != 256){
//     console.log(num);
//     num += 1;
// }

// for (var idx = 1; idx <= 256; idx=idx+2){
//     console.log(idx)
// }

// let i = 0
// let sum = 0
// for (var start = 0; start < 256; start++){
//     console.log(start);
//     sum = start + sum;
//     console.log(sum)
// }

// let array = [2,3,58,19,10]
// for (var index = 0; index <= array.length; index++){
//     console.log(array[index])
// }

// let array = [2,3,58,19,10]
// let largest_number;
// for(var i = 0; i <= array.length;i++){
//     largest_number = array[i]
//     i++
//     if (largest_number < array[i]){
//         largest_number = array[i]
//     } 
// }
// console.log(largest_number)

// 7 Array with Odds
// const returnOddsArr = () => {
//     let newArr = []
//     for(let i = 1; i < 256; i=i+2){
//         newArr.push(i)
//     }
//     console.log(newArr)
// }

// returnOddsArr()

// 8. Square the Values
let newArray = [1,2,3,4,5]
// const squaredAway = arr => {
//     let result = arr.map(el => el**2)
//     return result
// }

// console.log(squaredAway(newArray))


// 9 Greater than Y 
// const greaterThan = (arr,target) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > target){
//             count++;
//         }
//     }
//     return count
// }

// let greater = greaterThan(newArray,2)
// console.log(greater)

// 10. Zero out negative numbers
// const zero = arr => {
//     let newArr = arr.map(el => (el < 0) ? 0 : el)
//     return newArr
// }

// console.log(zero(newArray))

// 11. Max, min, Average
// const findThings = arr => {
//     let minValue = Math.min(...arr)
//     let maxValue = Math.max(...arr)
//     let average = arr.reduce((a,b) => a + b, 0) / arr.length;
//     console.log([minValue, maxValue, average])
// }
// findThings(newArray)

// 12. Shift Array Values
const shiftArray = arr => {
    for(let i in arr){
        i = i - 1;
    }
    
}