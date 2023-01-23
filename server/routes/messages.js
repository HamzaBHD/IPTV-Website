const express = require('express')
const Router = express.Router()

const { message } = require('../models')

Router.post('/', (req, res, next) => {
    const userObj = req.body

    if (!userObj) {
        return res.json({ error: 'We are missing information' })
    } else if(!userObj.username) {
        return res.json({ error: 'Please provide your name' })
    } else if (!userObj.email) {
        return res.json({ error: 'Please provide your email'})
    } else if(!userObj.userMessage) {
        return res.json({ error: 'Your message looks empty please be nice and write something' })
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