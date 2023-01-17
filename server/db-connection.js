require('dotenv').config();
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const db = mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))

module.exports = db