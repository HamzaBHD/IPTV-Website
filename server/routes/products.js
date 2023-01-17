var express = require('express');
var path = require('path')
var router = express.Router();
var product = require('../models');
var multer = require('multer');
var fs = require('fs')

 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString + file.fieldname)
    }
});
 
var upload = multer({ storage: storage });


router.get('/', function(req, res, next) {
  product.find({}, (err, item) => {
    console.log(item)
    if (err) {
        console.log(err);
        res.status(500).send('An error occurred', err);
    }
    else {
        res.json(item);
    }
});
})

router.post('/', upload.single('image'), (req, res, next) => {
 
  var obj = {
      name: req.body.name,
      price: req.body.price,
      imageURL: req.file.path
  }
  product.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save()
          res.json(item)
      }
  });
});


module.exports = router;
