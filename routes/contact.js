contactRouter = require("express").Router()

contactInfo = "cvanb002@campus.goldsmiths.ac.uk"

contactRouter.get("/", (req, res) => res.send(`<h1>${contactInfo}</h1>`))

module.exports = contactRouter 