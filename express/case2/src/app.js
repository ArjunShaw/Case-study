const express = require('express');
const app = express();
const EventRouter = require("./routes/event")
const ContactRouter = require('./routes/contact')

// use for create json format
app.use(express.json());

// use for pubic folder like css and images
app.use(express.static('public'))

// use for require logic from routes
app.use("/event", EventRouter);
app.use("/contact", ContactRouter );



app.get("/", (req, res) => {
    res.send("Hello Budies")
})





const port = 3000;
app.listen(port, () => {
    console.log("Server is run on port 3000");
})