import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      if (i !== newArr.length - 1) {
        if (i !== newArr.length - 2 && ['--double-prev', '--discard-prev'].includes(newArr[i + 2])) {
          newArr.splice(i, 3);
          i = i - 3;
        } else {
          newArr.splice(i, 2);
          i = i - 2;
        }

      } else {
        newArr.splice(i, 1);
        i -= 1;
      }

    } else if (newArr[i] === '--discard-prev') {
      if (i !== 0) {
        newArr.splice(i - 1, 2);
        i = i - 2
      } else {
        newArr.splice(i, 1);
        i -= 1;
      }

    } else if (newArr[i] === '--double-next') {
      if (i !== newArr.length - 1) {
        newArr[i] = newArr[i + 1]
      } else {
        newArr.splice(i, 1);
        i -= 1;
      }

    } else if (newArr[i] === '--double-prev') {
      if (i !== 0) {
        newArr[i] = newArr[i - 1]
      } else {
        newArr.splice(i, 1);
        i -= 1;
      }
    }

  }
  return newArr;
}