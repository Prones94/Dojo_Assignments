/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

const kMostFrequent = (nums, k) => {
    let result = [], map = new Map();

    nums.forEach(num => map.set(num, map.get(num) + 1 || 1))
    let sortedArray = [...map.entries()].sort((a,b) => b[1]-a[1])
    console.log(sortedArray)
    for(let i =0; i < k; i++){
        result.push(sortedArray[i][0])
    }
    return result
}

console.log(kMostFrequent(nums1, k1))

// using O(n) time

const topKFrequent = (nums, k) => {
    const frequencyMap = new Map()
    const bucket = []
    const result = []
    // Creating the hash map using set and get methods
    // add an element with the num value & key to the frequencyMap object
    // its key will either return 0 or increase by 1
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    } 
    // Loop through the key and value of the hash map
    // let the num_value in the bucket either equal the num_value or a new Set
    // add the num key to the end of its new Set object
    for (let [num_key,num_value] of frequencyMap){
        bucket[num_value] = (bucket[num_value] || new Set()).add(num_key)
        // console.log(bucket[num_value]);
    }
    // Loop backwards from the end of the bucket length to the beginnning
    // if there is a value at this index of i, then push the spread of the values of the bucket
    // otherwise if the result.length is equal to the number of k, then break out of the loop
    for(let i = bucket.length-1; i >=0;i--){
        if(bucket[i]) result.push(...bucket[i])
        if(result.length === k) break
    }
    // return result
    return result
}

console.log(topKFrequent(nums1,k1))