const express = require('express')
const Router = express.Router()

const { message } = require('../models')

Router.post('/', (req, res, next) => {
    const userObj = req.body

    if (!userObj.username || !userObj.email || !userObj.userMessage) {
        return 
    } else {
        message.create(userObj, (err, item) => {
            
            if(err) {
                console.log(err)
                res.status(500).send('An error occurred', err);
            } else {
                res.json({ messge: "Thank you for leaving us a message" })
            }
        })
    }
})


module.exports = Router