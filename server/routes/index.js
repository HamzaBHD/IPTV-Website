var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.headers)
    res.json({message: 'this an express app'})
})
module.exports = router;
