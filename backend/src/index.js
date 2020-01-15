const express = require('express')
const routes = require("./routes")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://lucas:lucas123@cluster0-rjkqb.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)
