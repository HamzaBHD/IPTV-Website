const mongoose = require('mongoose')
const { Schema } = mongoose;

let productSchema = new Schema({
    name: 'String',
    price: 'String',
    imageURL: { type: String, required: true },
    isFavorite: { type: Boolean, default: false}
}, { collection : 'products' })

let messageSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    userMessage: { type: String, required: true },
    date: { type: Date, default: new Date()}
}, { collation: 'messages' } )

const product = new mongoose.model('Product', productSchema)
const message = new mongoose.model('Message', messageSchema)

module.exports = { product, message }