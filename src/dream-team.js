import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let teamName = [];
  if(!Array.isArray(members)){
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string' && members[i].trim().length != 0) {
      let corrStr = members[i].trim()
      teamName.push(corrStr[0].toUpperCase());
    }

  }
  return teamName.sort(compare).join("");
  function compare (a, b){
    if(a < b){
      return -1;
    }
    if(a > b){
      return 1;
    }
    return 0;
  }

  // return members
  //   .filter(s => typeof s === "string")
  //   .map(s => s[0].toUpperCase())
  //   .sort()
  //   .join('')

}
