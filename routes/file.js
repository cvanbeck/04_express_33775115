// Imports modules required for this router to run correctly
const fileRouter = require("express").Router()
const path = require("path")

fileRouter.get('/', (req, res) => {
    // "../public/file.html" returns an error if used directly in sendFile as "../" is unsafe for security reasons,
    // therefore we use the path module to find the path for us.
    res.sendFile(path.join(__dirname, "../public/file.html"))
})

module.exports = fileRouter