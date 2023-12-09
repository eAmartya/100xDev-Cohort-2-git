/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(!transactions.length){
    return [];
  }
  let finalArray = [{
    category:transactions[0].category,
    totalSpent:transactions[0].price,
  }];
  function myFunction(element){
    for(let i = 0;i<finalArray.length;i++){
      if(finalArray[i].category == element.category){
        finalArray[i].totalSpent+=element.price;
        return true;
      }
    }
    finalArray.push({category:element.category,totalSpent:element.price,});
  }
  transactions.splice(1).forEach(myFunction)
  return finalArray;
}

module.exports = calculateTotalSpentByCategory;



