import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined && value !== null) {
      value = ' ';
    }

    this.arr.push(value);
    return this
  },

  removeLink(pos) {
    if ((typeof pos) !== 'number' || pos <= 0 || pos >= this.arr.length) {
      this.arr = []; 
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    for (let i = 0; i < this.arr.length; i++) {
      if (i < this.arr.length - 1) {
        result += '( ' + this.arr[i] + ' )~~'
      } else {
        result += '( ' + this.arr[i] + ' )'
      }
    }
    
    this.arr = [];
    return result;
  }
};
