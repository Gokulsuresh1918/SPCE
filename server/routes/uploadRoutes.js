const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFromBuffer } = require('../services/googleDrive');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
});

// Upload image to Google Drive
router.post('/:folderType', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided',
      });
    }

    const { folderType } = req.params;
    const allowedTypes = ['team', 'dishes', 'gallery', 'events', 'testimonials'];
    
    if (!allowedTypes.includes(folderType)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid folder type. Allowed: team, dishes, gallery, events, testimonials',
      });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = req.file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
    const fileName = `${timestamp}_${originalName}`;

    // Upload to Google Drive
    const result = await uploadFromBuffer(
      req.file.buffer,
      fileName,
      folderType,
      req.file.mimetype
    );

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: result.url,
        fileId: result.fileId,
        webViewLink: result.webViewLink,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error uploading image',
    });
  }
});

// Upload multiple images
router.post('/:folderType/multiple', upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No image files provided',
      });
    }

    const { folderType } = req.params;
    const allowedTypes = ['team', 'dishes', 'gallery', 'events', 'testimonials'];
    
    if (!allowedTypes.includes(folderType)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid folder type',
      });
    }

    const uploadPromises = req.files.map(async (file) => {
      const timestamp = Date.now();
      const originalName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
      const fileName = `${timestamp}_${originalName}`;

      const result = await uploadFromBuffer(
        file.buffer,
        fileName,
        folderType,
        file.mimetype
      );

      return {
        url: result.url,
        fileId: result.fileId,
        webViewLink: result.webViewLink,
      };
    });

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      message: `${results.length} images uploaded successfully`,
      data: results,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error uploading images',
    });
  }
});

module.exports = router;
