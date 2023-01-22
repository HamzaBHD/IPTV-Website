var express = require('express');
var router = express.Router();
var path = require('path')
var product = require('../models');
var multer = require('multer');

 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('./uploads/'))
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
});
 
var upload = multer({ storage: storage });


router.get('/', function(req, res, next) {

    product.find({}, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else if (!item) {
            res.json({message: 'looks like there is nothing here'})
        }
        else {
            res.json(item);
        }
    })
})

router.get('/:id', function(req, res, next) {

    const id = req.params.id

    if(id === 'firstLoad') {
        return res.json({ message: 'It looks like you didn\'t pick your product yet' })
    }

    product.findById(id, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else if (!item) {
            res.json({message: 'looks like there is nothing here'})
        }
        else {
            res.json(item);
        }
    })
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
          res.json(item)
      }
  });
});


module.exports = router;
