const bubbleSort = arr => {
    let length = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length; i++){
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1];
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while (swapped);
    return arr;
}

const selectionSort = arr => {
    let length = arr.length
    for (let i = 0; i < length; i++){
        let min = i
        for (let j = i + 1; j < length; j++){
            if (arr[min] > arr[j]){
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

const insertionSort = nums => {
    let inserts, position; // declare variables
    for (i = 1; i < nums.length; i++){ 
        inserts = nums[i] // starting pointer
        position = i // this is for the index to the left of the pointer
        while (position >= 0 && nums[position] > inserts){ // we inclue j >= 0 to include negative indexing, checks if value at i is greater than starting pointer
            arr[position] = arr[position-1]
            position--;
        }
        nums[position] = inserts
    }
    return nums
}
const insertionSortWithBinary = arr => {
    let insertionIndex, insertee, i, j;
    for (i = 1; i < arr.length;i++){
        insertee = arr[i]
        insertionIndex = insertionSearch(insertee, i)
        for (j = i; j > insertionIndex; j--){
            arr[j] = arr[j-1]
        }
        arr[insertionIndex] = insertee
    }
    return arr
}
function insertionSearch(insertee, upperbound){
    let lowerbound, searchIndex;
    lowerbound -= 1
    while (upperbound - lowerbound > 1){
        searchIndex = Math.floor((lowerbound + upperbound) / 2)
        arr[searchIndex] <= insertee ? lowerbound = searchIndex : upperbound = searchIndex
    }
    return upperbound
}

const merge = (left, right) => {
    let result, rightIndex, leftIndex;
    result = [];
    for (leftIndex = rightIndex = 0; leftIndex < left.length && rightIndex < right.length; ) {
      if (left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    for(; leftIndex < left.length; leftIndex++){
        result.push(left[leftIndex]);
    }
    for (; rightIndex < right.length; rightIndex++){
        result.push(right[rightIndex]);
    }
    return result;
  }
  
  const mergeSortDos = arr => {
    if (arr.length < 2) return arr;
    let pivot = Math.floor(arr.length /2)
    left = arr.slice(0, pivot)
    right = arr.slice(pivot)
    return merge(mergeSortDos(left), mergeSortDos(right))
  }
 
// const partition(nums=[], left=0, right=nums.length - 1){
//     const middleIdx = Math.floor(left+right)/2
//     const pivot = nums[middleIdx]
//     while (left < right){
//         while(nums[left]< pivot){
//             left++
//         }
//         while(nums[right]> pivot){
//             right++
//         }
//         [nums[left],nums[right]] = n[nums[right], nums[left]]
//     }
//     return left
// }
let swap = (arr, i, j) => {
    let temp = arr[j]
    arr[i], arr[j] = arr[j], temp
}
let partition = (arr,low, high) => {
    let q = low = i;
    for (; i < high; i++){
        if(arr[i] < arr[high]){
            swap(arr, i, q);
            q++
        }
    }
    swap(arr, i, q);
    return q
}

const quickSort = (arr, low, high) => {
    if (low < high){
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot-1)
        quickSort(arr, pivot+1, high)
        return arr
    }
}