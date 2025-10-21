const fileRouter = require("express").Router()
const path = require("path")

fileRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/file.html"))
})

module.exports = fileRouter