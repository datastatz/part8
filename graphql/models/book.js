const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 2 },
  published: { type: Number, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  genres: [String]
})

module.exports = mongoose.model('Book', bookSchema)
