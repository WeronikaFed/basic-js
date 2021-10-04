import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || "+";
    let addition =  "";
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || "|";

    if(options.addition !== undefined){
        addition = options.addition;
    }
    let resolvedAddition = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)
    let newStr = Array(repeatTimes).fill(str + resolvedAddition).join(separator);
    return newStr;
}
