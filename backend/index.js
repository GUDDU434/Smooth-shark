const express = require("express")

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use()

app.use("/",(req,res)=>{
    res.send("welcome webRTC")
})

app.listen(8080,()=>{
    console.log("server started on http://localhost:8080");
})