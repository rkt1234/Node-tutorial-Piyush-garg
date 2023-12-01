const http = require("http")
const fs = require("fs")
const myserver = http.createServer((req, res) => {
    const log = Date.now().toString()+" "+ req.method + '\n';
    fs.appendFile("./log.txt", log, (err, data) => {
        res.end("Hello from server again")
    })
})
myserver.listen(8000, () => console.log("Server started"))