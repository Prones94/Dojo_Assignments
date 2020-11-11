const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];


function orderedIntersection(sortedA, sortedB){
    const aSet = new Set(sortedA) // destroy all duplicates 
    const bSet = new Set(sortedB) // destroy all duplicates 
    const result = [] // create a variable to hold all interesections

    for (var value of aSet){ // loop through the values of the first set
        if (bSet.has(value)){ // checks if second set has that value
            result.push(value) // push that intersected value into the result array
        }
    }
    return result
}

console.log(orderedIntersection(numsA2,numsB2));


function intersection(arr1, arr2){
    let solution = arr1.filter(num => arr2.includes(num)) // checks each number in arr1 and returns intersections 

    const result = new Set(solution) // create set to return unique values

    return [...result] // spreaad the object to cast value into an array
}

console.log(intersection(numsA1, numsB1));

function orderedIntersection(arr1, arr2){
    let i = j = 0
    let result = []
    while(i < arr1.length && j < arr2.length){
        if (arr1[i] === arr2[j]){
            if (result[result.length-1] !== arr1[i]){
                result.push(arr1[i])
            }
            i++
            j++
        } else if (arr1[i] < arr2[j]){
            i++
        } else {
            j++
        }
    }
    return result
}