const findN = (arr, n) => {
    if (arr.length <= 0){
        return null;
    } else {
        return arr[arr.length - n]
    }
}

console.log(findN([5,2,3,6,4,9,7],3));