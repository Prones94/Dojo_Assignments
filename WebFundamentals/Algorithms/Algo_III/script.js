// Algo III

function printAverage(x){
    var sum = 0;
    for (let i of x){
        sum += i
        // console.log(i);
    }
    // console.log(sum, x.length);
    return sum / x.length
 }
//  var y = printAverage([1,2,3]);
//  console.log(y); // should log 2
   
//  y = printAverage([5,2,8]);
//  console.log(y); // should log 5

 function returnOddArray(){
     let arr = [];
    for(let i = 1; i <= 256; i+=2){
        arr.push(i)
    }
    return arr
 }
//  var y = returnOddArray();
//  console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x){
    // your code here
    return x.map(el => el ** 2);
 }
 var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]