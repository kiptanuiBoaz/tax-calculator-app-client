const express = require("express");
const { calculateExpenses, getBillManager } = require("../calculate");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

// app.use("/api",router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//fetch the current netPay to be the balance
app.get("/getExpenses", (request, response) => {
  let totalBalance = getBillManager();

  response.json({
    message: "Response successfully fetched!!",
    status_code: 200,
    data: totalBalance,
  });
});

//post the expenses(expected balance is 9,000)
app.post("/calculateExpenses", (request, response) => {

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

app.listen(port, () => {
  console.log(`Listening at port: http://localhost/${port}`);
});

