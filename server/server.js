const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({"Message": "this is just a test"})
})


app.listen(9000, () => {
    console.log('You are on PORT: 9000')
})