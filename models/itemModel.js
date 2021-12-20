const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    item_id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: Array,
        default:'https://www.pngitem.com/pimgs/m/77-773758_cloud-aws-hd-png-download.png'
    },
    description: String,
    content: String,
    colors: Array,
    sizes: Array,
    price: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Items', itemSchema)