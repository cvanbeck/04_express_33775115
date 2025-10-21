fileRouter = require("express").Router()

fileRouter.get('/', (req, res) => {
    res.sendFile("../public/file.html", {root: __dirname})
})

module.exports = fileRouter