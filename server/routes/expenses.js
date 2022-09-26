const express = require("express");
const { calculateExpenses, getBillManager } = require("../calculate");
const router = express.Router();



//fetch the current netPay to be the balance
router.get("/getExpenses", (request, response) => {
  let totalBalance = getBillManager();

  response.json({
    message: "Response successfully fetched!!",
    status_code: 200,
    data: totalBalance,
  });

  console.log(`New Updated Balance: ${totalBalance}`);
});

//post the expenses(expected balance is 9,000)
router.post("/calculateExpenses", (request, response) => {

  let expenses = request.body;
  console.log(expenses);

  let totalBalance = calculateExpenses(expenses);

  if (!request) {
    response.status(500).send("Server error!");
  } else {
    response.json({
      success_message: "Request sent successfully!!",
      data: totalBalance,
      status_code: 200,
    });
  }

});

module.exports = router

