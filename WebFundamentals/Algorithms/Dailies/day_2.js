/**
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} a new array with the elements from both concatenated
 * NOTE: You can use push.
 */

function concat(arr1, arr2) {
    let newArr = [];
    for (let i of arr1){
        newArr.push(i)
    }
    for (let i of arr2){
        newArr.push(i)
    }
    console.log(newArr);
    return newArr
  }
  
//   console.log(concat([1, 2, 3], [4, 5, 6]));
  // should log [1, 2, 3, 4, 5, 6]
  
  
  /**
   * @param {array} arr
   * @returns {array} the same (modified) array
   */
  
  const reverseInPlace = arr => {
    // let temp = arr[0]
    // for (let i = 0; i < arr.length / 2; i++){
    //     temp = arr[i];
    //     arr[i] = arr[arr.length - 1 - i];
    //     arr[arr.length - 1 - i] = temp;
    //     temp = arr[i+1]
    // }
    // for (let i = 0; i <= Math.floor((arr.length  -1 ) / 2); i++) {
    //     //         let el = arr[i]
    //     //         arr[i] - arr[arr.length - 1 - i]
    //     //         arr[arr.length - 1 - i] = el
    //     //     }
    // return arr
// }
    let temp 
    for (let i = 0; i <arr.length /2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}
  
  var originalArray = [1, 2, 3, 4, 5];
  var result = reverseInPlace(originalArray);
  
  console.log(originalArray === result); // should log true
  console.log(result);
  console.log(originalArray); // should log [5, 4, 3, 2, 1]