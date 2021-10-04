import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let newArr = [];
  for (let i = 0; i < domains.length; i++) {
    newArr[i] = domains[i].split('.')
  }
  const saver = {}
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      const el = "." + newArr[i].slice(j, newArr[i].length).reverse().join(".")
      saver[el] = (saver[el] || 0) + 1;
    }
  }
  return saver;
}
