const double = arr => {
    return arr.flatMap(i => [i,i])
}

console.log(double([4, "Ulysses", 42, false]));