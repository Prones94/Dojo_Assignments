/**
 * @param {array} arr an array of elements
 * @param {string} separator string to separate the elements with
 * @returns {string} a string with all the elements "glued" by the separator
 */

function join(arr, separator = ', ') {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (result) {
        result += separator;
        }
        result += arr[i];
    }
    return result;
  }
  
  console.log(join(['this', 'that']));
  // should log 'this, that'
  
  console.log(join(['something', 'else'], '||'));
  // should log 'something||else'
  
  
  /**
   * @param {number[]} arr an array of numbers
   * @returns {number|null} the second largest number
   */
  
  function secondLargest(arr) {
    let max = arr[0];
    let secondMax;
    for(let i=1; i<arr.length;  i++){
        if(arr[i]>max){
           secondMax = max;
           max = arr[i]; 
        }else if(arr[i]>secondMax && arr[i]<max){
            secondMax = arr[i];
        } else {
            console.log(null)
        }
    }
    console.log(secondMax);
  }
  
  console.log(secondLargest([3, 5, 1, 7, 10])); // should log 7
  
  console.log(secondLargest([4, 4, 4])); // should log null