/*
    Calculating prime numbers 
        Number.prototype.isPrime = function () {
            for (let i = 2; i < this; i++){
                if (this % i === 0) {
                    return false
                }
            }
            return true
        }

        */
// Number.prototype.isPrime = function() {
//     return this % 2 === 0 ? true : false
// }
const { performance } = require('perf_hooks');
// const start = performance.now()
// let primeCount = 0;
// let num = 10000;
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++
//     }
//     num++
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// Which Fibonacci implementation is faster?
// Answer => RECURSIVE is slightly faster

// recursive
const reFib = num => {
    return num < 2 ?  num : reFib(num-1) + reFib(num-2)
}
console.log(reFib(20));
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative
const iFib = n => {
    const val = [0,1];
    while(val.length -1 < n){
        let len = val.length;
        val.push(val[len-1] + val[len-2])
    }
    return val[n]
}
console.log(iFib(50));
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// Reversing a String

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const start = performance.now()
const reversed1 = story.split("").reverse().join("");
console.log(`This took ${performance.now() - start} milliseconds to run this reversed function`);
// start = performance.now()
// const reversed2 = str => {return [...str].reverse().join()}
//  console.log(reversed2(story));
// console.log(`This took ${performance.now() - start} milliseconds to run this reversed function`);
