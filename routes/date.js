dateController = require("express").Router()

date = new Date()

dateController.get("/", (req, res) => {
    res.send(`The current date is: ${date.toLocaleString("en-GB")}`)
})

module.exports = dateController