const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Initialize Google Drive API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_DRIVE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    project_id: process.env.GOOGLE_DRIVE_PROJECT_ID,
  },
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

// Folder mapping - can use folder IDs or folder names
const FOLDER_MAP = {
  team: process.env.GOOGLE_DRIVE_TEAM_FOLDER_ID || 'team-members',
  dishes: process.env.GOOGLE_DRIVE_DISHES_FOLDER_ID || 'dishes',
  gallery: process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID || 'gallery',
  events: process.env.GOOGLE_DRIVE_EVENTS_FOLDER_ID || 'events',
  testimonials: process.env.GOOGLE_DRIVE_TESTIMONIALS_FOLDER_ID || 'testimonials',
};

// Check if value is a folder ID (alphanumeric string) or folder name
function isFolderId(value) {
  return /^[a-zA-Z0-9_-]+$/.test(value) && value.length > 10;
}

// Create folder if it doesn't exist
async function getOrCreateFolder(folderName) {
  try {
    // First, try to find existing folder
    const response = await drive.files.list({
      q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id, name)',
    });

    if (response.data.files.length > 0) {
      return response.data.files[0].id;
    }

    // Create new folder
    const folderResponse = await drive.files.create({
      requestBody: {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
      },
      fields: 'id',
    });

    return folderResponse.data.id;
  } catch (error) {
    console.error('Error creating/finding folder:', error);
    throw error;
  }
}

// Upload file to Google Drive
async function uploadFile(filePath, fileName, folderType = 'gallery') {
  try {
    const folderValue = FOLDER_MAP[folderType] || 'gallery';
    const folderId = isFolderId(folderValue) ? folderValue : await getOrCreateFolder(folderValue);

    const fileMetadata = {
      name: fileName,
      parents: [folderId],
    };

    const media = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream(filePath),
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink, webContentLink',
    });

    // Make the file publicly accessible
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    // Get the direct image URL
    const imageUrl = `https://drive.google.com/uc?export=view&id=${response.data.id}`;
    
    return {
      fileId: response.data.id,
      url: imageUrl,
      webViewLink: response.data.webViewLink,
    };
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error);
    throw error;
  }
}

// Upload from base64 or buffer
async function uploadFromBuffer(buffer, fileName, folderType = 'gallery', mimeType = 'image/jpeg') {
  try {
    const folderValue = FOLDER_MAP[folderType] || 'gallery';
    const folderId = isFolderId(folderValue) ? folderValue : await getOrCreateFolder(folderValue);

    const fileMetadata = {
      name: fileName,
      parents: [folderId],
    };

    const media = {
      mimeType: mimeType,
      body: buffer,
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink',
    });

    // Make the file publicly accessible
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    // Get the direct image URL
    const imageUrl = `https://drive.google.com/uc?export=view&id=${response.data.id}`;
    
    return {
      fileId: response.data.id,
      url: imageUrl,
      webViewLink: response.data.webViewLink,
    };
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error);
    throw error;
  }
}

// Delete file from Google Drive
async function deleteFile(fileId) {
  try {
    await drive.files.delete({
      fileId: fileId,
    });
    return true;
  } catch (error) {
    console.error('Error deleting file from Google Drive:', error);
    throw error;
  }
}

module.exports = {
  uploadFile,
  uploadFromBuffer,
  deleteFile,
  getOrCreateFolder,
};
