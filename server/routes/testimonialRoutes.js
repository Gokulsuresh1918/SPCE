const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials (public - only approved)
router.get('/', async (req, res) => {
  try {
    const { status, isFeatured, eventType } = req.query;
    let query = { status: 'approved' }; // Only show approved testimonials publicly
    
    // Admin can see all if status is specified
    if (status && req.query.admin === 'true') {
      query.status = status;
    }
    
    if (isFeatured !== undefined) query.isFeatured = isFeatured === 'true';
    if (eventType) query.eventType = eventType;

    const testimonials = await Testimonial.find(query)
      .sort({ displayOrder: 1, createdAt: -1 })
      .limit(req.query.limit ? parseInt(req.query.limit) : 100);
    
    res.status(200).json({ 
      success: true, 
      count: testimonials.length, 
      data: testimonials 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single testimonial
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(200).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create testimonial (public submission)
router.post('/', async (req, res) => {
  try {
    const {
      clientName,
      clientEmail,
      clientPhone,
      eventType,
      eventDate,
      rating,
      testimonial,
      photos,
    } = req.body;

    // Validation
    if (!clientName || !clientEmail || !rating || !testimonial) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, rating, and testimonial',
      });
    }

    const newTestimonial = await Testimonial.create({
      clientName,
      clientEmail,
      clientPhone: clientPhone || '',
      eventType: eventType || 'other',
      eventDate: eventDate ? new Date(eventDate) : undefined,
      rating: parseInt(rating),
      testimonial,
      photos: photos || [],
      status: 'pending', // Needs approval
    });

    res.status(201).json({
      success: true,
      message: 'Testimonial submitted successfully! It will be reviewed and published soon.',
      data: newTestimonial,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update testimonial (admin only - should be protected)
router.put('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial updated successfully',
      data: testimonial,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete testimonial (admin only - should be protected)
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
