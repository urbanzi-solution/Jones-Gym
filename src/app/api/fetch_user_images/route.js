import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs/promises';
import path from 'path';

// Your env vars
const REGION = 'auto';
const ENDPOINT = process.env.R2_ENDPOINT;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.R2_BUCKET;

// Helper for fallback image (assume .jpg default)
async function getDefaultImageBuffer() {
  return await fs.readFile(path.resolve('./public/images/user3.jpg'));
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('user_id');
  if (!user_id) {
    return new Response('Missing user_id', { status: 400 });
  }

  const s3Client = new S3Client({
    region: REGION,
    endpoint: ENDPOINT,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });

  // Try image extensions in order
  const extensions = ['png', 'jpg', 'jpeg'];
  let imageBuffer = null;
  let contentType = null;

  for (const ext of extensions) {
    const getObjectParams = {
      Bucket: BUCKET_NAME,
      Key: `users/${user_id}.${ext}`,
    };
    try {
      const response = await s3Client.send(new GetObjectCommand(getObjectParams));
      const chunks = [];
      for await (const chunk of response.Body) {
        chunks.push(chunk);
      }
      imageBuffer = Buffer.concat(chunks);
      contentType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
      break; // Found the image
    } catch (error) {
      // Only break loop early on actual errors — skip if just "not found"
      if (error.Code !== 'NoSuchKey' && error.name !== 'NoSuchKey') {
        return new Response('Image not found', { status: 404 });
      }
    }
  }

  if (imageBuffer) {
    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // Fallback: serve default user image
  try {
    const defaultImageBuffer = await getDefaultImageBuffer();
    return new Response(defaultImageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new Response('Image not found', { status: 404 });
  }
}
