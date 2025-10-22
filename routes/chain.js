const chainRouter = require("express").Router()
const fs = require("fs")



chainRouter.use((req, res, next) => {
    date = new Date().toLocaleString("en-gb")

    fs.writeFile(`./chainLog.txt`, date, err => {
        if(err){
            console.log("Unable to save log")
        } else {

        }
    })

    console.log(`Page visited at ${date} `)
    next()
})
chainRouter.get("/", (req, res) => {
    res.send(`<h1>This is a chained router</h1><p>When this page is loaded there is middleware that grabs the date and time and saves it to a file before calling next<p>
            <p>The date and time is ${date}`)
})

module.exports = chainRouter