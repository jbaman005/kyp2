# Google Drive API Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown at the top
3. Click **NEW PROJECT**
4. Name it something like "KYP Website" and create it

## Step 2: Enable Google Drive API

1. In the left sidebar, click **APIs & Services**
2. Click **Library**
3. Search for **"Google Drive API"**
4. Click it and press **ENABLE**

## Step 3: Create OAuth 2.0 Credentials

1. Go back to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** button
3. Select **OAuth client ID**
   - If prompted, click **Configure Consent Screen** first
   - Choose **External** user type
   - Fill in the app name (e.g., "KYP Website")
   - Add your email and click through to create the consent screen
4. After creating consent screen, go back to **Credentials**
5. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
6. Select **Web application**
7. Name it "KYP Website"
8. Under **Authorized JavaScript origins**, add:
   - `http://localhost:8000`
   - `http://127.0.0.1`
   - Your live domain (e.g., `https://yoursite.com`)
9. Under **Authorized redirect URIs**, add:
   - `http://localhost:8000/`
   - `http://127.0.0.1/`
   - Your live domain (e.g., `https://yoursite.com/`)
10. Click **CREATE**
11. Copy the **Client ID** (it looks like: `xxx.apps.googleusercontent.com`)

## Step 4: Add Client ID to Your Website

1. Open `/deploy/script.js`
2. Find line 4: `const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com';`
3. Replace `YOUR_CLIENT_ID_HERE.apps.googleusercontent.com` with your actual Client ID
4. Save the file

## Step 5: Make Google Drive Folder Accessible

1. Verify the Google Drive folder is accessible by your account
2. The folder ID `1orbLbFd1wemzElvWMd4a6cU2vW7JklBg` is already configured
3. Make sure the folder contains only image files, or add descriptive names to your photos

## Step 6: Test It Out

1. Open your website in a browser
2. Go to the **Gallery** section
3. Click the **"Load from Google Drive"** button
4. You should see a Google login popup (first time only)
5. After authentication, your photos should load into the gallery

## Troubleshooting

### "Error loading Google Drive"
- Check your Client ID is correct in `script.js`
- Make sure Google Drive API is enabled in Cloud Console

### "Authentication failed"
- Ensure your domain is added to Authorized JavaScript Origins and Redirect URIs
- Clear browser cache and try again

### Photos not loading
- Check that the folder contains image files
- Verify the folder ID is correct (it's already set)
- Open browser console (F12) to see error messages

### CORS Error
- This should not appear if you've correctly set up the Authorized JavaScript Origins

## Notes

- Photos load on-demand (not automatically) to save bandwidth
- Each user must authenticate once with their Google account
- The Google Drive folder doesn't need to be publicly shared - your Google account provides access
- Photos are cached in localStorage for faster subsequent loads
