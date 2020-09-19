function secondLargest(arr) { 
    let largest = arr[0];
    let secondlargest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([1,1.2,4,10,3]))