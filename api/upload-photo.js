import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, file } = req.body;
    
    if (!file || !filename) {
      return res.status(400).json({ error: 'Missing file or filename' });
    }

    // file should be a base64 string from the browser
    const buffer = Buffer.from(file.split(',')[1], 'base64');
    
    const blob = await put(`photos/${filename}`, buffer, {
      access: 'public',
    });

    return res.status(200).json({ url: blob.url });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message });
  }
}
