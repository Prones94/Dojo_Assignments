/*
Given a search criteria object whose values will only be primitives (ints, strings, bools)
and a list of objects,
return any object that matches all the key value pairs in the search criteria object
Bonus: write a 2nd solution using build in methods to practice functional programming

Time:
Space:
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];

  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];

  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];

const findObjects = (criteria, collection) => {
    const result = []
    let isMatch = true
    for(const items of collection) {
        for (let key in criteria){
            if(items.hasOwnProperty(key) && items[key] !== criteria[key]){
                isMatch = false
                break
            }
        }
        if (isMatch === true){
            result.push(items)
        }
    }
    return result
}

console.log(findObjects(searchCriteria1, items));


const findObjectsTwo = (criteria, collection) => {
    let searchSpace, searchResult;
    searchResult = []
    searchSpace = collection
    for (const key in criteria){
        searchResult = searchSpace.filter(item => key in item && item[key] )
    }
}