/*
  Zip Arrays into Map


  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value
 */

// const keys1 = ["abc", 3, "yo"]
// const vals1 = [42, "wassup", true]
// const expected1 = {
//   abc: 42,
//   3: "wassup",
//   yo: true,
// }

function zipArraysIntoMap(keys, values) {
    if(keys.length !== values.length){
        return false
    } else {
        let hashmap = {}
        for (let i = 0; i < keys.length; i++){
            let newkey = keys[i]
            let newvalue = values[i]
            hashmap[newkey] = newvalue
        }
        return hashmap
    }
}
  
  console.log(zipArraysIntoMap(["abc", 3, "yo"], [42, "wassup", true]))
  
  /* ******************************************************************************** */
  
  /*
    Invert Hash
  
    A hash table / hash map is an obj / dictionary
  
    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
  */
  
  const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
  // const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };
  
  function invertObj(obj) {
    let hashmap = {}
    for(const [key, values] of Object.entries(obj)){
        hashmap[values] = key
    }
    return hashmap

  }
  
console.log(invertObj(obj1));