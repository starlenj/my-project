const express = require("express")
const app = express();

app.get("/",(req,res)=>res.send("tamamdir"))
app.listen(4001)