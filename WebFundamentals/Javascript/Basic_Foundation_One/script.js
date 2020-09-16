// 1. Get 1 to 255
// const oneTo = () => {
//     let newArr = [];
//     for (let i = 0; i <= 255; i++) {
//         newArr.push(i);
//     }
//     return newArr
// }
// let arr = oneTo()
// console.log(arr)

// 2. Get even 1000
// const getEven = () => {
//     let sum = 0;
//     for (let i = 0; i <= 1000; i+=2){
//         sum += i
//     }
//     return sum
// }
// let sum = getEven()
// console.log(sum)

// 3. Sum odd 5000
// const getOdd = () => {
//     let sum = 0;
//     for (let i = 1; i < 5000; i +=2) {
//         sum += i;
//     }
//     return sum
// }

// let odd = getOdd()
// console.log(odd)

// 4. Iterate an array
// const iterArray = (arr) => {
//     let sum = 0;
//     for (i in arr){
//         sum += arr[i]
//     }
//     return sum
// }
// let newArray = [-5,2,5,12]
// console.log(iterArray(newArray))

// 5. Find Max
// const findMax = (arr) => {
//     return Math.max(...arr)
// }
// let newArray = [-3,3,5,7]
// arr = findMax(newArray)
// console.log(arr)

// 6. Find average
// const findAverage = (arr) => {
//     let average = 0;
//     let sum = 0;
//     for (let i in arr){
//         sum += arr[i]
//     }
//     average = sum / arr.length;
//     return average;
// }

// let newArr = [1,3,5,7,20]
// arr = findAverage(newArr)
// console.log(arr);

// 7. Array odd
// const getOddNum = (arr) => {
//     let oddArray = []
//     for (let i in arr) {
//         if (arr[i] % 2 !== 0){
//             oddArray.push(arr[i])
//         }
//     }
//     return oddArray
// }

// const newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let odds = getOddNum(newArr)
// console.log(odds)

// 8. Greter than Y
// const greaterThan = (arr, target) => {
//     let count = 0
//     for (let i in arr){
//         if(arr[i] > target){
//             count++;
//         }
//     }
//     return count
// }
//  const arr = [1, 3, 5, 7]
//  let greater = greaterThan(arr, 3);
//  console.log(greater)

// 9. Squares 
// const squares = (arr) => {
//     return arr.map(i => i**2)
// }
// console.log(squares([1, 4, 9, 16]))

// 10. Negatives
// const findNegatives = (arr) => {
//     let newArr = arr.map(num => (num < 0) ? num * -1 : num)
//     return newArr
// }

// console.log(findNegatives([1,5,10,-2]))

// 11. Max/Min/Avg
// const findThings = (arr) => {
//     let minValue = Math.min(...arr)
//     let maxValue= Math.max(...arr)
//     let average = arr.reduce((a,b) => a + b, 0) / arr.length;
//     return [minValue, maxValue, average]
// }

// console.log(findThings([20, 10, 5, 10]))

// 12. Swap Values
// const swap = (arr) => {
//     firstVal = arr[0]
//     lastVal = arr[arr.length -1]
//     arr[0] = lastVal;
//     arr[arr.length - 1] = firstVal
//     return arr
// }

// console.log(swap([1,5,10,-2]))

// 13. Number to String
// const numToStr = (arr) => {
//     let newArr = arr.map(el => (el < 0) ? 'Dojo' : el)
//     return newArr
// }

// console.log(numToStr([-1,-3,2]))