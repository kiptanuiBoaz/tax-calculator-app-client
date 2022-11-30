const express = require("express");
const app = express();
const cors=require('cors')

app.use(cors())
app.use(express.json())

const paye=require('./routes/paye')
const expenses=require('./routes/expenses')

app.use('/api',paye);
// app.use('/api',expenses);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


