const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide dish name'],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
    trim: true,
  },
  detailedDescription: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    required: [true, 'Please provide category'],
    enum: ['main-dish', 'vegetable-dish', 'pickle', 'dessert', 'snack', 'drink', 'other'],
    default: 'other',
  },
  ingredients: {
    type: [String],
    default: [],
  },
  cookingTime: {
    type: String,
    default: '',
  },
  spiceLevel: {
    type: String,
    enum: ['Mild', 'Medium', 'Hot', 'Sweet', 'None'],
    default: 'Mild',
  },
  price: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
  nutritionalInfo: {
    calories: Number,
    protein: String,
    carbs: String,
    fat: String,
  },
}, {
  timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
