const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express()
const PORT = 8000

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

app.get("/users", (req, res) => {
    const html = `
     <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`)}
     </ul>
    `;
    res.send(html)
})

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})

app.post('/api/users', (req, res) => {
    //to  do
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    })
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