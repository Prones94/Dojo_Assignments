function quickSort(arr, left, right) {
    left = left || 0;
    right = right || arr.length -1

    const pivot = partition(arr, left, right)

    if (left < pivot - 1) quickSort(arr,left, pivot-1);
    if (right > pivot) quickSort(arr,pivot, right);
    return arr
}

function partition(arr, left, right) {
    const pivot = Math.floor((left + right) / 2)

    while (left < right){
        while (arr[left] < arr[pivot]){
            left++
        }
        while(arr[right] > arr[pivot]){
            right--
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left ++
            right--
        }
    }
    return left
}

(function test(){
    let arr = [14,2,8,345,123,43,32,94,13,63,2,55,1,23,100]
    console.log(quickSort(arr));
})()


