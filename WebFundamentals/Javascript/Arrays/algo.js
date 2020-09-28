function printArray(arr) {
    let sum = 0;
    for (let i in arr){
        sum += arr[i]
        console.log(`Num: ${arr[i]}, Sum:${sum}`);
    }
}

printArray(testArr);

let testArr = [6,3,5,1,2,4]
const value_Position = arr => {
    // let newArr = []
    // for (let i = 0; i < arr.length; i++){
    //     var product = arr[i] * i;
    //     newArr.push(product)
    // }
    // return newArr
    for (var i = 0; i < arr.length; i++){
        // arr[i] is the value at that index
        // i is the number of the index
        arr[i] * i; // Value of arr index times the index number 
    }
}

console.log(value_Position(testArr));