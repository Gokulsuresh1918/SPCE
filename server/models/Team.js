const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide team member name'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Please provide role'],
    enum: ['chef', 'manager', 'coordinator', 'decorator', 'photographer', 'videographer', 'waiter', 'driver', 'other'],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
    trim: true,
  },
  specialization: {
    type: [String],
    default: [],
  },
  experience: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    trim: true,
  },
  availability: {
    type: String,
    enum: ['available', 'busy', 'unavailable'],
    default: 'available',
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
