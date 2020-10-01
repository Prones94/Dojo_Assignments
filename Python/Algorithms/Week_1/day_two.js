/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// var arr1 = [1, 2, 3]
// var separator1 = ", "
// var expected1 = "1, 2, 3"

// var arr2 = [1, 2, 3]
// var separator2 = "-"
// var expected2 = "1-2-3"

// var arr3 = [1, 2, 3]
// var separator3 = " - "
// var expected3 = "1 - 2 - 3"

// var arr4 = [1]
// var separator4 = ", "
// var expected4 = "1"

// var arr5 = []
// var separator5 = ", "
// var expected5 = ""

function join(arr, separator) {
    if(arr.length < 1){
        return ""
    }
    let newStr = ''
    for (let i = 0; i < arr.length; i++){
        if(newStr){
            newStr += separator
        }
        newStr += arr[i]
    }
    return newStr
}
console.log(join([1,2,3], "-"));
  
  /* ******************************************************************************** */
  
  /*
    String Encode
  
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears.
  
    */
  
  // var str1 = "aaaabbcddd"
  // var expected1 = "a4b2c1d3"
  
  // var str2 = ""
  // var expected2 = ""
  
  // var str3 = "aa"
  // var expected3 = "a2"
  
  // var str4 = "bbcc"
  // var expected4 = "b2c2"
  
  function encodeStr(str) {
    let tempArr = str.split('')
    let count = 1;
    let letters = []
    for (let i = 0; i<tempArr.length; i++){
        if(tempArr[i] === tempArr[i+1]){
            count++
        } else {
            let value = `${count}${tempArr[i]}`
            letters = [...letters, value]
            count = 1
        }
    }
    return letters.join('')
  }
  console.log(encodeStr("aaaabbcddd"));

  const encodeStr1 = str => {
      let counter = 1
      let newStr = ""
      for (let i = 0; i < str.length; i++){
          if(str[i] === str[i+1]){
              counter++
          } else {
              newStr += str[i] + counter
              counter = 1
          }
      }
      return newStr
  }
  
  /* ******************************************************************************** */
  
  /*
    String Decode
  */
  
  // var str1 = "a3b2c1d3"
  // var expected1 = "aaabbcddd"
  function isDigit(char){
      
  }
  const decode = str => {
      if (str.length < 0){
          return ""
      }
      let result, currentChar, count
      result = ""
      currentChar = str[0]
      count = ""
      for (let i = 1; i < str.length; i++){
          if(!isDigit(str[i])){
              result += currentChar.repeat(parseInt(count));
              currentChar = str[i] 
              count = ""
          } else {
              count += str[i]
          }
      }
      result += currentCharrepeat(parseInt(count))
      return result
  }
  const string = str => {
      let multiply = []
      let repeatStr = []
      let solution = ''

      for (let letter of str) {
          if(!isNaN(letter)){
                let tempMult = `${tempMult}${letter}`
          } else if (letter ==='['){
                multiple.push(tempMult);
                tempMult = ''

                repeatStr.push(solution)
                solution =''
          } else if (leter === ']'){
            solution = repeatStr.pop() + solution.repeat(multipy.pop())
          } else {
            solution += letter
          }
          return solution
      }
  }

  console.log(string("3a2b3c"));