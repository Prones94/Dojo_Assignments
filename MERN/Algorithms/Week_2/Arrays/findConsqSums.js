/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];


function findConsqSums(nums, targetSum) {
    const sums = []
    for (let i = 0; i < nums.length; i++){
        const consecNums = [];
        let sum = 0
        let j = i;

        while (sum <= targetSum && j < nums.length-1) {
            if (sum + nums[j]<= targetSum){
                sum += nums[j]
                consecNums.push(nums[j++])

                if (sum === targetSum){
                    sums.push(consecNums.slice())
                }
            } else {
                break
            }
        }
    }

}