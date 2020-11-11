/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1,2,3,4,6,7,8,10]
const expected1 = [
    { i: 4, n : 6},
    { i: 7, n: 10}
];

/**
 * Finds all the non-consecutive numbers from @sortedNums
 * @param    {Array<number>} sortedNums
 * @typedef  {Array<{i: number, n: number}>} output
 *           Array of objects
 * @property {number} i
 *           The index of the non consecutive number
 * @property {number} n
 *           The non consecutive number itself that is at the @i position
 * @return   {output}
 *           Array of objects that detail the found non-consecutive numbers
 *           and their location, see above typedef.
 * Time:     O(...)
 * Space:    O(...)
 */
function allNonConsecutive(sortedNums) {
    const newArray = [] // create an array to hold the object of variables
    /**
     *  .map or forEach or for loop
     *  for (i)
     *  AND => && OR => || 
     */
    sortedNums.map((num, i) => { // map through the sorted nums array
        // console.log(num,i);
        if(i>0 && num-1 !== sortedNums[i-1]){ // if i is greater than 0 AND the previous number does NOT equal the previous value
            newArray.push({i, num}) // push the index and value into the new array
        } else {
            return false // return false 
        }
    // (i > 0 && num-1 !== sortedNums[i-1]) ? newArray.push({i, num}) : false)
    return newArray
    }
}
