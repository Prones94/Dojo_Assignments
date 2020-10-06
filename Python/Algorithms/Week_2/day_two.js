/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

// const str1 = "abcABC"
// const expected1 = "abcABC"

// const str2 = "helloo"
// const expected2 = "helo"

function stringDedupe(str) {
    let result, map;
    result = ""
    map = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(map[char]){
            map[char]++
        } else {
            map[char] = 1
            result += char
        }
    }
    return result
}

console.log(stringDedupe('hellllooooo'));
/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

// const str1 = "hello"
// const expected1 = "olleh"

// const str2 = "hello world"
// const expected2 = "olleh dlrow"

// const str3 = "abc def ghi"
// const expected3 = "cba fed ihg"

function reverseWords(str) {
    let result, word;
    result = ""
    words = str.split(" ").map(letter => letter.split("").reverse().join("")
    ).join(' ')
    // if (str.length === 0){
    //     return ""
    // }
    // words = str.split(" ")
    // for(word in words){
    //     for (let i = word.length -1; i >= 0; i--){
    //         result += word[i]
    //     }

    // }
    return words
}
console.log(reverseWords('abd fhe kdj'));