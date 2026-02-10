const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  clientEmail: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
  },
  clientPhone: {
    type: String,
    trim: true,
  },
  eventType: {
    type: String,
    enum: ['wedding', 'corporate', 'festival', 'birthday', 'sadhya', 'other'],
    default: 'other',
  },
  eventDate: {
    type: Date,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  testimonial: {
    type: String,
    required: [true, 'Please provide your testimonial'],
    trim: true,
  },
  photos: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
