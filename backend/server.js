// getting our express to handle api
const express = require('express');
// getting our mongoose to handle our database
const mongoose = require('mongoose');
const cors = require('cors')

// accesing route from Routes.js
const routes = require('./routes/Routes')

require('dotenv').config()

// creacting an express appliation with function express
const app = express()

const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())


//connecting to mongodb
// call-back function
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDb !`))
    .catch((err) => console.log(err))

//passing the routes in use
app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
    // listening the data on port

