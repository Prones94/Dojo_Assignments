/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

// const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
    let table = {}
    // for(char of arr){
    //     table[char] ? table[char]++ : table[char] = 1;
    // }
    for(const letter of arr){
        if(table.hasOwnProperty(letter)){
            table[letter]++
        } else {
            table[letter] = 1
        }
        table
    }
    return table
}


console.log(frequencyTableBuilder(["a", "a", "a"]));
console.log(frequencyTableBuilder(["a", "b", "a", "c", "B", "c", "c", "d"]));

/* ******************************************************************************** */

/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

// const str1 = "This is a test";
// const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
    // return wordsStr.split(" ").reverse().join(" ")
    if(wordsStr == 0){
        return "";
    }
    let result, word;
    result = "";
    word = "";
    /*
    words = wordStr.split(" ");
    if(words.length === 0){
        return result;
    }
    for (let i = words.length - 1; i> 0; i--){
        result += words[i] + " ";
    }
    return result + words[0];
     */
    for (let i = str.length - 1; i >= 0; i--){
        if(str[i] == " "){
            result += word + " ";
            word = "";
        } else {
            word = str[i] + word;
        }
    }
    return result + word
}

console.log(reverseWordOrder("This is a test"))