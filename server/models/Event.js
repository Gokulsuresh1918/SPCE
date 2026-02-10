const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide event title'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  eventType: {
    type: String,
    required: [true, 'Please provide event type'],
    enum: ['wedding', 'corporate', 'festival', 'birthday', 'anniversary', 'engagement', 'other'],
  },
  eventDate: {
    type: Date,
    required: [true, 'Please provide event date'],
  },
  eventTime: {
    type: String,
    default: '',
  },
  venue: {
    name: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
  },
  client: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: String,
  },
  numberOfGuests: {
    type: Number,
    required: [true, 'Please provide number of guests'],
    min: 1,
  },
  services: {
    type: [String],
    default: [],
  },
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  }],
  status: {
    type: String,
    enum: ['planning', 'confirmed', 'in-progress', 'completed', 'cancelled', 'postponed'],
    default: 'planning',
  },
  budget: {
    estimated: Number,
    actual: Number,
    advancePaid: Number,
    balance: Number,
  },
  timeline: [{
    date: Date,
    task: String,
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
  }],
  notes: {
    type: String,
    trim: true,
  },
  photos: [{
    url: String,
    caption: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
