import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let letterNum = 1;    
  let result = '';
  for(let i = 0; i < str.length; i++){
      if(str[i] === str[i+1]){
        letterNum += 1;
      } else {
          result += letterNum + str[i];
          letterNum = 1;
      }
  }
  return result.replace(/1/g, '');
}
