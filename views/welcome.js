welcomeRouter = require("express").Router()

welcomeRouter.get("/", (req, res) => res.send("<h1>Welcome</h1>"));

welcomeRouter.get("/:name", (req, res) => {
    res.send(`<h1>Welcome ${req.params.name}`)
});

module.exports = welcomeRouter