const mongoose = require('mongoose')
const { Schema } = mongoose;

let productSchema = new Schema({
    name: 'String',
    price: 'String',
    img: { 
        data: Buffer,
        contentType:'String'
    }
})

module.exports = new mongoose.model('Product', productSchema)