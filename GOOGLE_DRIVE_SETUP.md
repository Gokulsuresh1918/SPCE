# Google Drive API Setup Guide

This guide will help you set up Google Drive API for image uploads in the Sree Padmanabha Event Management system.

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Drive API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

## Step 2: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Service account name: `sree-padmanabha-drive`
   - Service account ID: (auto-generated)
   - Description: "Service account for Google Drive uploads"
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Create and Download JSON Key

1. Click on the created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file
6. **Save this file securely** - you'll need it for the next steps

## Step 4: Share Google Drive Folder with Service Account

1. Create a folder in your Google Drive (or use an existing one)
2. Right-click the folder > "Share"
3. Add the service account email (found in the JSON file as `client_email`)
4. Give it "Editor" permissions
5. Click "Send"

## Step 5: Configure Environment Variables

Add these to your `server/.env` file:

```env
# Google Drive API Configuration
GOOGLE_DRIVE_CLIENT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_DRIVE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_DRIVE_PROJECT_ID=your-project-id

# Optional: Specific folder IDs (if you want to use existing folders)
# If not provided, folders will be created automatically
GOOGLE_DRIVE_TEAM_FOLDER_ID=your-team-folder-id
GOOGLE_DRIVE_DISHES_FOLDER_ID=your-dishes-folder-id
GOOGLE_DRIVE_GALLERY_FOLDER_ID=your-gallery-folder-id
GOOGLE_DRIVE_EVENTS_FOLDER_ID=your-events-folder-id
GOOGLE_DRIVE_TESTIMONIALS_FOLDER_ID=your-testimonials-folder-id
```

### Getting the Values from JSON:

1. Open the downloaded JSON file
2. Copy the `client_email` value → `GOOGLE_DRIVE_CLIENT_EMAIL`
3. Copy the `private_key` value → `GOOGLE_DRIVE_PRIVATE_KEY` (keep the quotes and \n)
4. Copy the `project_id` value → `GOOGLE_DRIVE_PROJECT_ID`

## Step 6: Install Dependencies

```bash
cd server
npm install googleapis multer
```

## Step 7: Folder Structure

The system will automatically create these folders in your Google Drive:
- `team-members` - For team member photos
- `dishes` - For dish images
- `gallery` - For gallery images
- `events` - For event photos
- `testimonials` - For testimonial photos

## Step 8: Make Folders Public (Optional)

If you want the images to be publicly accessible:

1. Go to each folder in Google Drive
2. Right-click > "Share"
3. Change access to "Anyone with the link"
4. Set permission to "Viewer"

## Testing the Setup

1. Start your server:
   ```bash
   cd server
   npm run dev
   ```

2. Test the upload endpoint:
   ```bash
   curl -X POST http://localhost:5000/api/upload/team \
     -F "image=@/path/to/test-image.jpg"
   ```

## Troubleshooting

### Error: "The caller does not have permission"
- Make sure you've shared the Google Drive folder with the service account email
- Check that the service account has "Editor" permissions

### Error: "Invalid credentials"
- Verify the JSON key file is correct
- Check that the private key in `.env` includes the `\n` characters
- Make sure the private key is wrapped in quotes

### Images not showing
- Check that the folder is shared publicly (if needed)
- Verify the image URL format: `https://drive.google.com/uc?export=view&id=FILE_ID`
- Make sure file permissions are set to "Anyone with the link"

## Security Notes

- Never commit the JSON key file to Git
- Keep your `.env` file secure
- The service account should only have access to the specific folders it needs
- Regularly rotate your service account keys

## Support

If you encounter issues, check:
1. Google Cloud Console for API quotas and errors
2. Server logs for detailed error messages
3. Google Drive API documentation: https://developers.google.com/drive/api
