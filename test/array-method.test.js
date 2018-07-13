const assert = require('assert');
const { squareOddNums } = require('../lib/array-method');

describe('square method', () => {
    const nums = [2, 3, 9, 12, 8, 5, 7];

    it('squares odd numbers and returns results greater than 24', () => {
        assert.deepEqual(squareOddNums(nums), [81, 25, 49]);
    });
});