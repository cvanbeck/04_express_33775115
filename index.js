const express = require("express")
// Imports for routers specified in views
const aboutRouter = require("./views/about")
const welcomeRouter = require("./views/welcome")

const app = express();

const port = 8000;

app.get("/", (req, res) => res.send("Hello Word"));
// Routers middleware, relative parts of the url can be found in their respective views files, the first argument specifies 
// where the the relative parts need to be appened to. For instane, if we changed app.use("/about", aboutRouter) to app.use("/information", aboutRouter)
// then the secret about file would be found by accessing localhost:800/information/secret as opposed to localhost:8000/about/secret
app.use("/about", aboutRouter)
app.use("/welcome", welcomeRouter)

// Tells our application to listen to requests on specified port
app.listen(port, () => console.log(`Server is running on port ${port}`))