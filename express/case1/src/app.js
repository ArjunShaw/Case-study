const express = require('express');
const app = express();




app.get("/", (req, res) => {
    res.send("Hello this is my new server")
});

//event page
app.get("/events", (req, res) => {
    const event = [
    'Yoga Class - Monday 7pm',
    'Gardening Workshop - Wednesday 5pm',
    'Book Club - Friday 6pm'
    ]
    res.json(event)
})

// contact page
app.get("/contact", (req, res) =>{
    const contact = {
        email : "xyz@gmail.com",
        phone : "452145872"
    }

    res.json(contact);
})


const port = 3000;
app.listen(port, ()=> {
    console.log("Server is start on 3000 port")
})