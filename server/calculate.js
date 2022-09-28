// const {netPay} = require('./routes/paye')
let totalBalance;
let netPay = 24000;
// console.log(netPay);

function getBillManager() {
  totalBalance = netPay;
  return totalBalance;
}

function calculateExpenses(expenses) {
//   console.log("Display all the values in the object");
  let array1 = Object.values(expenses);
  let totalExpenses = array1.reduce((a, b) => a + b, 0);

  console.log(totalExpenses);

  if (
    expenses.rent &&
    expenses.entertainment &&
    expenses.food &&
    expenses.shopping === null
  ) {
    totalBalance = netPay;
    console.log(`Total balance === NetPay: ${totalBalance}`);

    return totalBalance;
  } else {
    totalBalance = netPay - totalExpenses;
    console.log(`Total Balance = ${totalBalance}`);

    return totalBalance;
  }
}

module.exports = {
  calculateExpenses,
  getBillManager,
};
