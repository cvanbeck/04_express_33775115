const dateController = require("express").Router()

// Creates a new Date object
const date = new Date()

dateController.get("/", (req, res) => {
    // Displays the current date and time in British Standard Time
    res.send(`The current date is: ${date.toLocaleString("en-GB")}`)
})

module.exports = dateController