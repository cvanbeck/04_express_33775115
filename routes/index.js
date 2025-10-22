const indexRouter = require("express").Router()
const path = require("path")


indexRouter.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = indexRouter