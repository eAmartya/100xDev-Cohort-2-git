/*Write a function findLargestElement that takes an array of numbers and returns the largest element.
Example:
- Input: [3, 7, 2, 9, 1]
- Output: 9
*/

function findLargestElement(numbers) {
let potentialLargest = numbers[0];
for(let i = 0;i<numbers.length;i++){
  if(potentialLargest<numbers[i]){
    potentialLargest = numbers[i];
  }
}
return potentialLargest;
}

module.exports = findLargestElement;