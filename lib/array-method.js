function squareOddNums(arr) {
    return arr.filter(num => num % 2 === 1).map(num => num * num).filter(num => num > 24); 
}

module.exports = { squareOddNums };