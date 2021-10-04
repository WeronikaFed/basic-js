import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
 let numArr = n.toString().split('')
 for(let i = 0; i < numArr.length - 1; i++){
   if(numArr[i] < numArr[i + 1]){
    numArr.splice(i, 1)
    break;
   }
 }
 if(n.toString().length === numArr.length){
   numArr.pop();
 }
 return +numArr.join('')
}
