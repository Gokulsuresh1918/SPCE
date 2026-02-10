const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
  },
  eventType: {
    type: String,
    required: [true, 'Please provide event type'],
    enum: ['wedding', 'corporate', 'festival', 'birthday', 'sadhya', 'other'],
  },
  eventDate: {
    type: Date,
    required: [true, 'Please provide event date'],
  },
  numberOfGuests: {
    type: Number,
    required: [true, 'Please provide number of guests'],
    min: 1,
  },
  location: {
    type: String,
    required: [true, 'Please provide event location'],
    trim: true,
  },
  services: {
    type: [String],
    default: [],
  },
  specialRequirements: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
    default: 'pending',
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  advancePaid: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
