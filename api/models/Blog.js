const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ['frontend', 'backend', 'devops', 'design', 'fullstack'],
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    price: {
      type: String,
      enum: ['free', 'paid'],
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
      },
    language: {
      type: String,
      enum: ['arabic', 'english', 'frensh', 'spanish'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Blog', BlogSchema);
