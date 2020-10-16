/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
    let coins = [1,5,10,25]
    let container = {
        'quarter' : 0,
        'dimes' : 0,
        'nickels' : 0,
        'pennies' : 0
    }
    while(cents !== 0){
        if(cents > 25){
            result = Math.floor(cents/25)
            cents -= (result * 25)
            container['quarter'] = result
        }
        else if (cents > 10){
            result = cents % 10
            cents -= (result * 10)
            container['dimes'] = result
        }
        else if (cents > 5){
            result = cents % 5
            cents -= (result * 5)
            container['nickels'] = result
        }
        else if (cents > 1){
            result = cents % 1
            cents -= (result * 1)
            container['pennies']= result
        }
    }
    return container
}
console.log(fewestCoinChange(160));
/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1];
// const expected1 = 2;

// const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// // Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

// const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

// const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) {
    
}