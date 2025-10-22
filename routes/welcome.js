// This is a parameterised route, the name is passed as a parameter when the url is sent and is then retrieved with req.params.name
const welcomeRouter = require("express").Router()
const fs = require("fs")

welcomeRouter.use("/:name", (req, res, next) =>{
    if(req.params){
        date = new Date().toLocaleString("en-gb")
        fs.appendFile(`./welcomeLog.txt`, `Page Visited at: ${date} \n Ip address: ${req.ip} \n Request to ${req.params.name} \n\n`, err => {
            if(err){
                console.log("Unable to save log")
            } else {
                // File succesfully written
                console.log(`Saved log at ${date}`)
            }
        })
    }
    next()
})

welcomeRouter.get("/", (req, res) => res.send("<h1>Welcome</h1>"));


// By using :name we essentially create a key:value pair in req.params where the key is name and value is given in the url
welcomeRouter.get("/:name", (req, res) => {
    res.send(`<h1>Welcome ${req.params.name}`)
});

module.exports = welcomeRouter