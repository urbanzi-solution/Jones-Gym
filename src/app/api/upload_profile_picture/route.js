// src/app/api/upload-profile-picture/route.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function POST(request) {
  console.log('=== Upload profile picture route called ===');
  
  try {
    console.log('Request URL:', request.url);
    console.log('Request method:', request.method);
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    console.log('Parsing form data...');
    const formData = await request.formData();
    console.log('Form data parsed successfully');
    
    const profilePicture = formData.get('profilePicture');
    const gym_id = formData.get('gym_id');
    
    console.log('Gym ID:', gym_id);
    console.log('Profile picture:', profilePicture ? 'File present' : 'No file');

    if (!gym_id) {
      console.log('Error: Gym ID is required');
      return new Response(JSON.stringify({ error: 'Gym ID is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!profilePicture) {
      console.log('Error: No file uploaded');
      return new Response(JSON.stringify({ error: 'No file uploaded' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('File details:', {
      name: profilePicture.name,
      size: profilePicture.size,
      type: profilePicture.type
    });

    // Validate file type
    if (!profilePicture.type.startsWith('image/')) {
      console.log('Error: Invalid file type');
      return new Response(JSON.stringify({ error: 'Only image files are allowed' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate file size (10MB limit)
    if (profilePicture.size > 10 * 1024 * 1024) {
      console.log('Error: File size exceeds limit');
      return new Response(JSON.stringify({ error: 'File size exceeds 10MB limit' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Set the upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'images', 'user_pic');
    console.log('Upload directory:', uploadDir);
    
    if (!fs.existsSync(uploadDir)) {
      console.log('Creating upload directory...');
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Define the new file path
    const newFileName = `${gym_id}.png`;
    const newPath = path.join(uploadDir, newFileName);
    console.log('File will be saved to:', newPath);

    // Check if file already exists and remove it
    if (fs.existsSync(newPath)) {
      console.log('Removing existing file...');
      fs.unlinkSync(newPath);
    }

    // Convert file to buffer
    console.log('Converting file to buffer...');
    const buffer = await profilePicture.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    console.log('Buffer created, size:', uint8Array.length);

    // Convert the image to PNG and save it
    console.log('Processing image with sharp...');
    await sharp(uint8Array)
      .png()
      .toFile(newPath);
    
    console.log('Image saved successfully');
    
    const successResponse = { 
      message: 'Image uploaded successfully',
      fileName: newFileName,
      filePath: `/images/user_pic/${newFileName}`
    };
    
    console.log('Returning success response:', successResponse);
    
    return new Response(JSON.stringify(successResponse), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('=== Error in upload-profile-picture ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    const errorResponse = { 
      error: error.message || 'Failed to upload image',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };
    
    console.log('Returning error response:', errorResponse);
    
    return new Response(JSON.stringify(errorResponse), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Add GET method for testing
export async function GET(request) {
  console.log('GET request to upload-profile-picture endpoint');
  return new Response(JSON.stringify({ 
    message: 'Upload profile picture endpoint is working',
    method: 'POST required'
  }), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}