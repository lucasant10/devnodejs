const express = require('express')
const mongoose = require("mongoose")
const routes = require("./routes ")
const app = express()

mongoose.connect('mongodb+srv://lucas:lucas123@cluster0-rjkqb.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)


app.listen(3333)
