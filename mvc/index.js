const users = require('./MOCK_DATA.json')
const {connectdb}=require('./connection')
const fs = require('fs')
const userRouter=require('./routes/user')
const app = express()
const PORT = 8000

// connection  
connectdb()

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
app.use('/user',userRouter)

app.listen(PORT, () => console.log("Server started at PORT: " + PORT))