const numsA = [1,2,2,2,7]
const numsB = [2,2,6,6,7]
const expected = [1,2,2,2,6,6,7]

function orderedMultisetUnion(sortedA, sortedB){
    const result = []
    let idxA = idxB = 0
    while(idxA < sortedA.length || idxB < sortedB.length){
        if (idxA === sortedA.length){ //sortedB is longer that 
            result.push(sortedB[idxB++])
            continue
        } else if (idxB === sortedB.length) {
            result.push(sortedA[idx++])
            continue
        }
        if (sortedA[idxA] === sorteB[idxB]){
            result.push(sortedA[idxA++])
            idxB++
        } else if (sortedA[idxA] < sortedB[idxB]){
            result.push(sortedAp[idxA++])
        }else {
            result.push(sortedB[idxB++])
        }
    }
    return result
}

console.log(orderedMultisetUnion(numsA, numsB));