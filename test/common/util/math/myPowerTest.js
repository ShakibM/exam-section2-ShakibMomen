const squareNum = require('../../../../src/common/util/math/mySquare');
const cubeNum = require('../../../../src/common/util/math/myCube');
const myPower = require('../../../../src/common/util/math/myPowers')

const assert = require('chai').assert;
const num1 = 2;
const str1 = num1.toString();

describe("myPowerTest", function() {
    describe("squaring", function() {
        it('toSquare(' + num1 + ') should return square of "' + num1 + '"', function() {
            let result = squareNum.toSquare(num1);
            assert.equal(result, Math, pow(num1, 2));
        });

        it('toSquare(' + str1 + ') should return square of "' + str1 + '"', function() {
            let result = cubeNum.toCube(str1);
            assert.equal(result, Math, pow(num1, 2));
        });

        it('toSquare should return type number', function() {
            let result = SquareNum.toSquare(num1);
            assert.typeof(result, 'number');
        });
    });

    describe("cubing", function() {
        it('toCube(' + num1 + ') should return cube of "' + num1 + '"', function() {
            let result = cubeNum.toCube(num1);
            assert.equal(result, Math.pow(num1, 3));
        });

        it('toCube(' + str1 + ') should return cube of "' + str1 + '"', function() {
            let result = cubeNum.toCube(str1);
            assert.equal(result, Math.pow(num1, 3));
        });

        it('toCube should return type number', function() {
            let result = CubeNum.toCube(num1);
            assert.typeof(result, 'number');
        });
    });
});