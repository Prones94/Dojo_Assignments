/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted.
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
// const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
// const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
// const expected3 = true

const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
// const expected3 = true

function binarySearch(sortedNums, searchNum) {

  let start = 0; end = sortedNums.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end)/2);
      if (mid === searchNum) return true;
      else if (sortedNums[mid] < searchNum){
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return false;
}

let result = binarySearch(nums2, searchNum2)
console.log(result);
// console.log(assert.equal(result, expected1))