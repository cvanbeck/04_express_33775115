// This is a parameterised route, the name is passed as a parameter when the url is sent and is then retrieved with req.params.name
const welcomeRouter = require("express").Router()

welcomeRouter.get("/", (req, res) => res.send("<h1>Welcome</h1>"));

// By using :name we essentially create a key:value pair in req.params where the key is name and value is given in the url
welcomeRouter.get("/:name", (req, res) => {
    res.send(`<h1>Welcome ${req.params.name}`)
});

module.exports = welcomeRouter