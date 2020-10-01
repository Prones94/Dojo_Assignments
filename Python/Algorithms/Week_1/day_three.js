// /*
//   String: Is Palindrome

//   Create a function that returns a boolean whether the string is a strict palindrome.
//     - palindrome = string that is same forwards and backwards

//   Do not ignore spaces, punctuation and capitalization
//  */

// // const str1 = "a x a"
// // const expected1 = true

// // const str2 = "racecar"
// // const expected2 = true

// // const str3 = "Dud"
// // const expected3 = false

// // const str4 = "oho!"
// // const expected4 = false

// const isPalindrome = str => {
//     string = str.toLowerCase();
//     for (let i = 0; i < string.length; i++){
//         console.log(string[string.length - 1 - i]);
//         if (string[i]  !== string[string.length - 1 - i]){
//             return false
//         }
//     }
//     return true
// }

// const palindrome = str => {

// }

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('oho!'));
  
//   /* ******************************************************************************** */
  
//   /*
//     Longest Palindrome
  
//     For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.
  
//     Strings longer or shorter than complete words are OK.
  
//     All the substrings of "abc" are:
//     a, ab, abc, b, bc, c
//   */
  
//   // const str1 = "what up, daddy-o?"
//   // const expected1 = "dad"
  
//   // const str2 = "uh, not much"
//   // const expected2 = "u"
  
//   // const str3 = "Yikes! my favorite racecar erupted!"
//   // const expected3 = "e racecar e"

// const longestPalindrome = str => {
//     // let start = 0; let end = 0;
//     // for (let i = 0; i < start.length; i++){
//     //     let center = findCenter(str, i)
//     //     let ends = helper(str, center[0], center[1]);
//     //     let left = ends[0]; right = ends[1];
//     //     if (right - left > end - start) {
//     //         start = left
//     //         end = right 
//     //     }
//     //     i = center[1]
//     // }
//     // return str.substring(start, end + 1)

//     /*
//     change string to all lowercase
//     create variables holding the start and end and empty string
//     create a new helper function that holds the string, index, and the other pointer
//         while index is greater than or equal to 0 AND other pointer is less than the string length AND string @ index is equal to string @ other pointer
//             subtract one from index
//             increase one to other pointer
//         return sliced string, using index + 1 and the other pointer
//     loop through index starting at 0; i is less than the string length and increment index by one
//         first location uses the helper function, using string, index, and index
//         second location uses the helper function, using string, index, and index + 1
//         create a variable that holds longer palindrome
//         if location 1 length is longer than location 2
//             use location 1
//         else
//             use location 2
//         if longer palindrome length is greater than the variable for empty string length
//             then variable is equal to longer palindrome
        
//         return longest variable
//      */
//     let longest = '';
//     const findLongestPalindrome = (str, i, j) => {
//         while(i >= 0 && j < str.length && str[i] === str[j]) {
//             i -= 1;
//             j += 1;
//         }
//         // slice the qualified substring from the second last iteration
//         return str.slice(i + 1, j);
//     }
//     for (let i = 0; i < s.length; i++) {
//         // palindrome can center around 1 or 2 letters
//         const current1 = findLongestPalindrome(s, i, i);
//         const current2 = findLongestPalindrome(s, i, i + 1);
//         const longerPalindrome = 
//               current1.length > current2.length ? current1 : current2;
//         if (longerPalindrome.length > longest.length) {
//             longest = longerPalindrome;
//         } 
//     }
//     return longest;
//     // let longest = '';
//     // const findLongestPalindrome = (str, i, j) => {
//     //     while(i >= 0 && j < str.length && str[i] === str[j]) {
//     //         i -= 1;
//     //         j += 1;
//     //     }
//     //     // slice the qualified substring from the second last iteration
//     //     return str.slice(i + 1, j);
//     // }
//     // for (let i = 0; i < s.length; i++) {
//     //     // palindrome can center around 1 or 2 letters
//     //     const current1 = findLongestPalindrome(s, i, i);
//     //     const current2 = findLongestPalindrome(s, i, i + 1);
//     //     const longerPalindrome = 
//     //           current1.length > current2.length ? current1 : current2;
//     //     if (longerPalindrome.length > longest.length) {
//     //         longest = longerPalindrome;
//     //     } 
//     // }
//     // return longest;





// }

// const findCenter = (str, left, right) {
//     let left = left; let right = right;
//     while (left >= 0 && right < str.length && str[left] == string[right]){
//         left--;
//         right++
//     }
//     return[++left, --right]
// }

// const helper = (str, center) => {
//     let left = center, right = center;
//     while(str[left] === str[++right] && right <= str.length);
//     return [left, --right];
// }