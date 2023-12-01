const express=require('express')
const http=require('http')
const app=express()
app.get('/',(req,res)=>{
    return res.send("Hello from home")
})
app.listen(8000, () => console.log("Server started"))
// const myserver=http.createServer(app)
// myserver.listen(8000, () => console.log("Server started"))