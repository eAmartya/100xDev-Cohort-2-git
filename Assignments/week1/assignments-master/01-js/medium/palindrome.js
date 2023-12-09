/*
  Implement a function isPalindrome which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function feeder(dataType1,dataType2,start,end){
    for(start;start<end;start++){
      dataType1[start] = dataType2[start];
    }
    return dataType1;
  }
  let arr = [];
  let unifiedString = str.toLowerCase();
  //since arrays are pass by reference the array will get feeded even without capturing the return value of the function.
  feeder(arr,unifiedString,0,unifiedString.length);
  function spaceAndPuncEater(array){
    for(let i = 0;i<array.length;i++){
      //look for space
      if(array[i].charCodeAt(0)==32){
        // console.log(removing ${array[i]} because found space);
        array.splice(i,1);
        i-=1;
      }else if(array[i]=='.'||array[i]==','||array[i]=='!'||array[i]=='?'||array[i]=="-"||array[i]=="("||array[i]==")"||array[i]=="["||array[i]=="]"){
        //look for punctuations
        // console.log(removing ${array[i]} because found punctuation);
        array.splice(i,1);
        i-=1;
      }
    }
  }
  // unifiedString = spaceAndPuncEater(arr);
  /*I am letting this line stay here because i spent and hour looking for this bug: caught by pass by reference */
  spaceAndPuncEater(arr);
  unifiedString = '';
  for(let k = 0;k<arr.length;k++){
    unifiedString+=arr[k];
  }
  arr.reverse();
  function checking(array1,array2){
    for(let i = 0;i<array1.length;i++){
      if(!(array1[i]==array2[i])){
        return false;
      }
    }
    return true;
  }
  return checking(arr,unifiedString);
}

module.exports = isPalindrome;