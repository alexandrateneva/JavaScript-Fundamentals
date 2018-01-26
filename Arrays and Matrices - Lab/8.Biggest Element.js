function getBiggestElement(matrix) {
    let matrixAsArr = matrix.reduce((row1, row2) => row1.concat(row2));
    let biggestElement = Math.max.apply(null, matrixAsArr);
    return biggestElement;
}

console.log(getBiggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(getBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));
