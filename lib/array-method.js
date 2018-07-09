function squareOddNums(arr) {
    const newArr = arr.filter(num => num % 2 === 1).map(num => num * num).filter(num => num > 24);
    return newArr;
}

module.exports = { squareOddNums };

