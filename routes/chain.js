const chainRouter = require("express").Router()
// Filestystem is required to write files
const fs = require("fs")



chainRouter.use((req, res, next) => {
    date = new Date().toLocaleString("en-gb")

    // Middleware to write the current date to a file at ./chainLog.txt, will console log Unable to save log if unsuccesful
    fs.writeFile(`./chainLog.txt`, date, err => {
        if(err){
            console.log("Unable to save log")
        } else {
            // File succesfully written
            console.log(`Saved log at ${date}`)
        }
    })
    // Once this middleware is complete calls next to get page
    next()
})
chainRouter.get("/", (req, res) => {
    res.send(`<h1>This is a chained router</h1><p>When this page is loaded there is middleware that grabs the date and time and saves it to a file before calling next<p>
            <p>The date and time is ${date}`)
})

module.exports = chainRouter