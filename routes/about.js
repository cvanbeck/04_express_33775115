// Imports and creates a Router object called aboutRouter
const aboutRouter = require("express").Router()

let pageHits = 1

// Default route for About
aboutRouter.get("/", (req, res) => res.send(`<h1>This is an about page</h1>`))

// Specifies a second route that displays how many times the page has been seen
aboutRouter.get("/secret", (req, res) => {
    res.send(`<h1>This is a secret About page, this page has been seen ${pageHits} times<h1>`)
    pageHits += 1
})
    
// Exports the router for use in index.js
module.exports = aboutRouter