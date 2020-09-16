const printOdds = () => {
    for (let i = 1; i < 21; i+=2) {
        console.log(i);
    }
}

const sumAndPrint = () => {
    let sum = 0;
    for (let i = 1; i <= 5; i++){
        sum += i;
        console.log(`Num: ${i}, Sum:${sum}`);
    }
}


console.log(printOdds())
console.log(sumAndPrint());