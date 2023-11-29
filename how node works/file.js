const fs = require('fs')
const os=require('os')
console.log(os.cpus().length)
// // sync... blocking
// fs.writeFileSync("./test.txt","Hello world")

// // async... non blocking
// fs.writeFile("./test.txt", "Hello world")
console.log("1")
// blocking
// const result=fs.readFileSync('./test.txt','utf-8')
// non blocking
fs.readFile('./test.txt', 'utf-8',(err,res)=>
{
    console.log(res)
})
console.log("2")
console.log("3")
console.log("4")

// default thread pool size 4

