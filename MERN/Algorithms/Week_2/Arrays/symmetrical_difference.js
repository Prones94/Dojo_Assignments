const symDifference = (arr1, arr2) => {
    return[
        ...arr1.filter(x => !arr2.includes(x)),
        ...arr2.filter(x => !arr1.includes(x))
    ];
}


const test1A = [1,2]
const test2A = [2,1]
const expected = [];

console.log(symDifference(test1A, test2A));


const difference=(setA, setB) => {
    let union = new Set([...setA, ...setB])
    let intersection = new Set(setA)
    let intersect = new Set(setB.filter(num => intersect.has(num)))
    return [...union].filter(num => !intersect.has(num))
}

const diff = (a, b) => {
    let result;
    result = new Set(a)
    b = new Set(b)
    for (const item in b){
        if (result.has(item){
            result.delete(item)
        } else {
            result.add(item)
        }
    }
    return result
}

const seen = arr => {
    const table = {}
    const deduped = []
    for (let i of arr){
        if (table.hasOwnProperty(i) === false){
            deduped.push(i)
            table[i] = 1
        } else {
            table[i] = table[i] + 1
        }
    }
}
