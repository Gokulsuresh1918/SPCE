const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide service name'],
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
  category: {
    type: String,
    required: [true, 'Please provide category'],
    enum: ['catering', 'decoration', 'photography', 'videography', 'invitation', 'return-gifts', 'venue', 'transport', 'other'],
  },
  image: {
    type: String,
    default: '',
  },
  price: {
    startingFrom: Number,
    unit: {
      type: String,
      enum: ['per-person', 'per-event', 'per-hour', 'per-day', 'fixed'],
      default: 'per-event',
    },
  },
  features: {
    type: [String],
    default: [],
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
  duration: {
    type: String,
    default: '',
  },
  teamRequired: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
