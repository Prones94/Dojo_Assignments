function diagonalDifference(matrix){
    const matrixLength = matrix.length
    let diagonalOne = 0
    let diagonalTwo = 0
    for (let i=0; i< matrixLength; i++){
        for (let j = 0; j < matrixLength; j++){
            if (i === j) {
                diagonalOne += matrix[i][j]
            }
            if (i + j === matrixLength - 1){
                diagonalTwo += matrix[i][j]
            }
        }
    }
    return Math.abs(diagonalOne - diagonalTwo)
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]

console.log(diagonalDifference(matrix));