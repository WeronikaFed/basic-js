import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = arr.filter(el => el !== -1);

  newArr.sort((a, b) => a - b);
  let j = 0;
  let resArr = arr.slice()
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] !== -1) {
      resArr[i] = newArr[j];
      j++
    }
  }
  return resArr;
}
