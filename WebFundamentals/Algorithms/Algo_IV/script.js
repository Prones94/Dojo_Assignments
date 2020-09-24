// 1. Given an array and a value Y, and print the number of array values greater than Y
const filter = (arr, target) => {
    const filtered = arr.filter(el => el > target)
    return filtered;
}

// 2. Given an array, print the max, min, and average values for that array
const findValues = arr => {
    const arrMin = Math.min(...arr);
    const arrMax = Math.max(...arr);
    const arrAvg = arr.reduce((a,b) => a + b, 0) / arr.length;
    return [arrMin, arrMax, arrAvg]
}

//3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string 'Dojo'
const replaceNegatives = arr => {
    arr = arr.map(el => (el < 0) ? 'Dojo' : el)
    return arr
}
// const negatives = replaceNegatives([1,2,-3,-5,5])
// console.log(negatives);

const returnVal = (arr,start, end) => {
    end--
    arr.splice(start, end)
    return arr
}
let y = returnVal([20,30,40,50,60,70],2,4)
console.log(y);
