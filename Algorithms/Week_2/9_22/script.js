/**
 * @param {array} arr an array of elements
 * @returns {any} the removed element
 */

function pop(arr) {
    if(arr.length <= 0){ // Check if loop is empty
        return null
    } else {
        let temp = arr[arr.length - 1] // Assign temp variable for last value in array
        arr.length = Math.max(0, arr.length - 1) // Prevents assigning a negative value
        return temp
    }
  }
  
  var arrayToPop = [1, 2];
  var popResult = pop(arrayToPop);
  
//   console.log(popResult); // should log 2
//   console.log(arrayToPop); // should log [1]
  
  
  /**
   * @param {array} arr an array of elements
   * @returns {any} the removed element
   */
  
  function popFront(arr) {
    let temp = arr[0] // Create a variable for the first variable
    for (let i = 0; i < arr.length - 1;i++){
        arr[i] = arr[i + 1] // Reassignment of arr indexes, allowing arr[0] => arr[1] starting index
    }
    arr.length-- // Reduce the length of the current array
    return temp // Return first index
  }
  
  var arrayToPopFront = [1, 2, 3, 4];
  var popFrontResult = popFront(arrayToPopFront);
  
  console.log(popFrontResult); // should log 1
  console.log(arrayToPopFront); // should log [2, 3, 4]