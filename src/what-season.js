import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date.getMonth !== 'function' || date.toString !== new Date().toString) {
    throw new Error("Invalid date!");
  }
  return ['winter', 'spring', 'summer', 'autumn'][Math.floor(((date.getMonth() + 1) % 12) / 3)];
}
