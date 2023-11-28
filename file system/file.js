const fs=require('fs')
// synchornous call
// fs.writeFileSync('./test.txt','Ravikant here')
// asynchronous call
// fs.writeFile('./test.txt', 'Ravikant here',(err)=>{})

// synchornous
// const result=fs.readFileSync('./contacts.txt','utf-8')
// console.log(result)

//asynchorous
// fs.readFile('./contacts.txt', 'utf-8',(err,result)=>
// {
//     if(err){
//     console.log("Error aa gaya h ")}
//     else
//     {
//         console.log(result)
//     }
// })
// fs.appendFileSync('./test.txt','\nState : New Delhi')
// console.log(fs.Dir)
// fs.cpSync('./test.txt','./copy.txt')
fs.unlinkSync('./copy.txt')
