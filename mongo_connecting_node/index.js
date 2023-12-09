const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const mongoose=require('mongoose')

const app = express()
const PORT = 8000

// connection  
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log("Mongo connected"))
.catch(err => console.log("Mongo not connected"))

// Schema 
const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    },
    
},
    { timestamps: true }
)

// creating the model
const User=mongoose.model('user',userSchema)

// Middleware plugin
app.use(express.urlencoded({ extended: false }))

app.use((req,res,next)=>{
    console.log("Hello from middleware 1")
    next()
})

app.use((req, res, next) => {
    console.log("Hello from middleware 2")
    next()
})

//ROUTES

app.get("/users", async (req, res) => {
    const alldbusers=await User.find({});
    const html = `
     <ul>
     ${alldbusers.map((user) => `<li>${user.first_name}-${user.email}</li>`)}
     </ul>
    `;
    res.send(html)
})

app.get('/api/users', async (req, res) => {
    const alldbusers = await User.find({});
    return res.json(alldbusers)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})

app.post('/api/users', async (req, res)  => {
    //to  do
    const body = req.body
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "success", id: users.length })
    // })

    const result=await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender:body.gender
    })
    console.log("yaha tak execute hua h")
    console.log(result)
    return res.status(201).json({msg:"All ok"})
})
app.patch("/api/users/:id", (req, res) => {
    //to  do
    return res.json({ status: 'pending' })
})
app.delete("/api/users/:id", (req, res) => {
    //to  do
    return res.json({ status: 'pending' })
})
app.listen(PORT, () => console.log("Server started at PORT: " + PORT))