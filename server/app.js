const express = require("express");
const app = express();
const cors=require('cors')

app.use(cors())
app.use(express.json())
const paye=require('./routes/paye')
app.use('/api',paye);



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
