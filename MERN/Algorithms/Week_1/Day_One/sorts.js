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