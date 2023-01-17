var express = require('express');
var path = require('path')
var router = express.Router();
var product = require('../models');
var multer = require('multer');
var fs = require('fs')

 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });


router.get('/', function(req, res, next) {
  product.find({}, (err, items) => {
    console.log(items)
    if (err) {
        console.log(err);
        res.status(500).send('An error occurred', err);
    }
    else {
        // res.json(items.img.data.data);
    }
});
})

router.post('/', upload.single('img'), (req, res, next) => {
 
  var obj = {
      name: req.body.name,
      price: req.body.price,
      img: {
          data: fs.readFileSync(path.join('./uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
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
