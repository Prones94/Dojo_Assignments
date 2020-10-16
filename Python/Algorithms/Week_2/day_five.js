/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

// const newInv1 = [
//   { name: "Grain of Rice", quantity: 9000 },
//   { name: "Peanut Butter", quantity: 50 },
//   { name: "Royal Jelly", quantity: 20 },
// ]
// const currInv1 = [
//   { name: "Peanut Butter", quantity: 20 },
//   { name: "Grain of Rice", quantity: 1 },
// ]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

// const newInv2 = []
// const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

// const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
// const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
    let i , result, inventoryDict, inventoryItem;
    inventoryDict = {}
    // Build a dictionary of the current inventory that maps names to quantaties
    for (i = 0; i < currInv.length; i++){
        inventoryItem = newInv[i];
        if(!(inventoryItem[inventoryItem["name"]] in inventoryDict)) {
            inventoryDict[inventoryItem["name"]] = 0;
        }
        inventoryDict[inventoryItem["name"]] += inventoryItem["quantity"];
    }
    result = [];
    // Enumerate through the inventroy dictionary converting the daata back into the expected format
    for (const name in inventoryDict){
        result.push({
            "name" : name,
            "quantity" : inventoryDict[name]
        });
    }
    return result
}

const test = updateInventory(newInv3, currInv)
console.log(test);

/* ******************************************************************************** */

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes"
// const strB1 = "eys"
// const expected1 = true

// const strA2 = "yes"
// const strB2 = "eYs"
// const expected2 = true

// const strA3 = "no"
// const strB3 = "noo"
// const expected3 = false

// const strA4 = "silent"
// const strB4 = "listen"
// const expected4 = true

function isAnagram(s1, s2) {
    // if strings are not the same length, return false
    if (s1.length !== s2.length){
        return false
    }
    let i, table;
    table = {};
    for (i = 0; i < s1.length; i++){
        table[s1[i]]++;
    } else {
        table[s1[i]] = 1;
    }

}

/* ******************************************************************************** */
/*
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

// const str1 = "   hello world     "
// const expected1 = "hello world"

function trim(str) {
    let i, left, right;
    // iterative approach from left to right to find the position of the first non-space character
    for (i =0; i < str.length; i++){
        if(str[i] != " "){
            break;
        }
    }
    left = i;
    // iterative approach right to left to find the position of the last non-space character
    for (i = str.length - 1; i >= left; i--){
        if (str[i] !== " "){
            break;
        }
    }
    right = i + 1;
    // Output a substring from the leftBound inclusive to the rightBound exclusive
    return str.substring(left, right)
}