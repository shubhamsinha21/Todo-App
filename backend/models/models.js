const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Todo', schema)