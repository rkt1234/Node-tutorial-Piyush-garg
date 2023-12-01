const http = require("http")
const fs = require("fs")
const url=require("url")

const myserver = http.createServer((req, res) => {
    const myurl=url.parse(req.url,true)
    console.log(myurl)
    if (req.url === "/"){
    const log = Date.now().toString()+ " Home page" + '\n';
    fs.appendFile("./log.txt", log, (err, data) => {
        res.end("Home Page")
    })
    }

    else if (req.url === "/about") {
        const log = Date.now().toString() + " About page" + '\n';
        fs.appendFile("./log.txt", log, (err, data) => {
            res.end("About")
        })
    }

    else  {
        const log = Date.now().toString() + " Does not exist" + '\n';
        fs.appendFile("./log.txt", log, (err, data) => {
            res.end("404 does not exist")
        })
    }


})
myserver.listen(8000, () => console.log("Server started"))