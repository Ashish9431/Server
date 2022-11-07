const express = require("express")
require("dotenv").config()


const app = express()

const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/about",(req,res)=>{
    res.send("about")
})

app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
})

