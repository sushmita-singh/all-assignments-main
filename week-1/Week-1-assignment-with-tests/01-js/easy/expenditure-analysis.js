/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  if (transactions.length == 0) {
    return [];
  }

  var result = [];
  var index = 0;
  result[index] = {"category": transactions[0].category, "totalSpent": transactions[0].price};
  index++;

  for(var i = 1; i <transactions.length; i++) {
    var found = false;
    for (var j = 0 ; j < result.length; j++) {
      if (transactions[i].category == result[j].category) {
        result[j].totalSpent += transactions[i].price;
        console.log("inside="+i+":"+j)
        found = true;
      }
    }
    if (!found) {
      result.push({ "category": transactions[i].category, "totalSpent": transactions[i].price });
    }
    console.log(result);
  }
  console.log(result);
  return result;
}

// calculateTotalSpentByCategory([{itemName: "Bread",category: "Food",price: 100,timestamp: "10:10"},
//                               {itemName: "Soap",category: "Food",price: 50,timestamp: "10:10"},
//                               {itemName: "Petrol",category: "Personal",price: 500,timestamp: "10:10"},
//                               {itemName: "Soap",category: "Food",price: 50,timestamp: "10:10"},
//                               {itemName: "Petrol",category: "Personal",price: 50,timestamp: "10:10"}])

module.exports = calculateTotalSpentByCategory;
