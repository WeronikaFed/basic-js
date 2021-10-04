import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let arr = email.split('');
  let corrInd = null;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] == "@") {
      corrInd = i;
      break
    }
  }
  let domain = arr.slice(corrInd + 1).join('');

  return domain;
}
