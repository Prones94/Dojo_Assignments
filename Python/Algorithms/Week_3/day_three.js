/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

// const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

// const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

// const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {
    let map = {}; // create a dictionary
    for (let i = 0; i < nums.length; i++){ 
        if (map[nums[i]] !== undefined){ // index for value if nums[i] exists
            nums.splice(map[nums[i]], 1); // Splice that specific index
            i--; // decrease counter because of splice above
            map[nums[i]] = i; // Reassign new index for value
        } else {
            map[nums[i]] = i // Record the new index
        }
    }
    console.log(map);
    return nums // Return the number array
}

// console.log(removeDuplicates(nums1));
// console.log(removeDuplicates(nums2));
// console.log(removeDuplicates(nums3));
/* ******************************************************************************** */

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

// const nums1 = [];
// const expected1 = [];

// const nums2 = [1];
// const expected2 = [1];

// const nums3 = [5, 1, 4];
// const expected3 = [];

// const nums4 = [5, 1, 4, 1];
// const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5,6,9,10,10,10,15,15];
// const expected5 = [5, 1]
// //  - order doesn't matter

// find all modes if more than one
function mode(arr) {
    let newDict = {}
    let newArray = []
    for (let value of arr){
        if(!newDict[value]){
            newDict[value] = 1
        } else {
        newDict[value] += 1
        newArray.push(value)
        }
    }
    return newArray
}
console.log(mode(nums5));