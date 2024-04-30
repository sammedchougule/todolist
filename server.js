// import dependencies
const express = require("express")

// Create a new express application object
const app = express()

//middleware
app.use("/static", express.static("static")
)

//Routes
app.get("/test", (req, res) => {
    res.send("Hello")
})

app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: "Sammed Chougule"
    })
})

// run your application, so it listens on port 4444
app.listen(4444, () => {
    console.log("Server is Listening on port 4444")
})