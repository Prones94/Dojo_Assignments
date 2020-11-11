/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

// Steps to creating this algorithm
// 1. Create an object containing hte key-value pais of the element  and its index
// 2. Iterate through array; create the difference variable between the targetSum and the value in nums
    // if currentDiffernce exists in hashtable and the current elements index does NOT equal the value of the current difference of the hashtable
        // return the indices of each element
        // otherwise move to the next element in the array


const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

const twoSum = (nums, targetSum) => {
    let frequencyTable = {}

    for (let i= 0; i < nums.length; i++){
        let currentDifference = targetSum - nums[i]
        if (frequencyTable[currentDifference] !== undefined && frequencyTable[currentDifference] !== i){
            return [i, frequencyTable[currentDifference]];
        } else {
            frequencyTable[nums[i]] = i
        }
    }
}

console.log(twoSum(nums1,targetSum1));