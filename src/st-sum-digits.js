import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  function corrSum(num) {
    let sum = 0
    let temp = 0;
    while (num) {
      temp = num % 10;
      num = (num - temp) / 10;
      let tempSum = sum + temp
      sum = tempSum >= 10 ? corrSum(tempSum) : tempSum;
    }
    return sum;
  }

  return corrSum(n)

}
