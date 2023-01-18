const mongoose = require('mongoose')
const { Schema } = mongoose;

let productSchema = new Schema({
    name: 'String',
    price: 'String',
    imageURL: { type: String, required: true },
    isFavorite: { type: Boolean, default: false}
}, { collection : 'products' })

module.exports = new mongoose.model('Product', productSchema)