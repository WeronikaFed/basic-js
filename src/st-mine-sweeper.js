import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  function top(i, j) {
    return matrix[i-1][j] ? 1 : 0
  }
  function bottom(i, j) {
    return matrix[i+1][j] ? 1 : 0
  }
  function left(i, j) {
    return matrix[i][j-1] ? 1 : 0
  }
  function right(i, j) {
    return matrix[i][j+1] ? 1 : 0
  }
  function topRight(i, j) {
    return matrix[i-1][j+1] ? 1 : 0
  }
  function topLeft(i, j) {
    return matrix[i-1][j-1] ? 1 : 0
  }
  function bottomRight(i, j) {
    return matrix[i+1][j+1] ? 1 : 0
  }
  function bottomLeft(i, j) {
    return matrix[i+1][j-1] ? 1 : 0
  }
  
  let newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
  }  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true){
        newMatrix[i][j] = 1;
      } else if (i === 0 && j === 0){
        newMatrix[i][j] = right(i, j) + bottomRight(i, j) + bottom(i, j)
      } else if (i === 0 && j === matrix[i].length -1){
        newMatrix[i][j] = left(i, j) + bottomLeft(i, j) + bottom(i, j)
      } else if (i === matrix.length -1 && j === 0){
        newMatrix[i][j] = top(i, j) + topRight(i, j) + right(i, j)
      } else if (i === matrix.length -1 && j === matrix[i].length -1){
        newMatrix[i][j] = top(i, j) + topLeft(i, j) + left(i, j)
      } else if (i === 0){
        newMatrix[i][j] = bottomLeft(i, j) + bottom(i, j) + bottomRight(i, j) + right(i, j) + left(i, j)
      } else if (j === 0){
        newMatrix[i][j] = top(i, j) + bottom(i, j) + bottomRight(i, j) + right(i, j) + topRight(i, j)
      } else if (j === matrix[i].length - 1){
        newMatrix[i][j] = top(i, j) + left(i, j) + topLeft(i, j) + bottomLeft(i, j) + bottom(i, j)
      } else if (i === matrix.length - 1){
        newMatrix[i][j] =  left(i, j) + topLeft(i, j) + top(i, j) + topRight(i, j) + right(i, j)
      } else {
        newMatrix[i][j] = left(i, j) + topLeft(i, j) + top(i, j) + topRight(i, j) + right(i, j) + bottomRight(i, j) + bottom(i, j) + bottomLeft(i, j)
      }
    }
  }
  return newMatrix;
}
