/*
    Part 2
 */

 // Print 1 to x
 function printUpTo(x){
    for (let i = 0; i <= x;i++){
        console.log(i)
    }
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  var y = printUpTo(-10); // should return false
  console.log(y); // should print false

  // PrintSum
  function printSum(x){
    var sum = 0;
    for (let i = 0; i<= x; i++){
        sum += i
    }
    return sum
  }
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  // PrintSumArray
  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

  // largestElement
  function largestElement(arr){
      return Math.max.applu(null, arr)
  }