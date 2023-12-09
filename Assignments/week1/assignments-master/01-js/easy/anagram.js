/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let array1 = [];
  let array2 = [];
  if(str1.length==str2.length){
    for(let i = 0;i<str1.length;i++){
      array1.push(str1[i].toLowerCase());
      array2.push(str2[i].toLowerCase());
    }
    array1.sort();
    array2.sort();
    for(let i = 0;i<array1.length;i++){
      if(array1[i]!==array2[i]){
        return false;
      }
    }
  }else{
    return false;
  }
  return true;
}

module.exports = isAnagram;
