import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs/promises';
import path from 'path';

// Your env vars remain the same.
const REGION = 'auto';
const ENDPOINT = process.env.R2_ENDPOINT;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.R2_BUCKET;

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

  const getObjectParams = {
    Bucket: BUCKET_NAME,
    Key: `users/${user_id}.png`, // <-- looks in the "user_pic" or "users" folder—adjust if needed!
  };

  try {
    const response = await s3Client.send(new GetObjectCommand(getObjectParams));
    const stream = response.Body;
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const imageBuffer = Buffer.concat(chunks);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    // Serve fallback image if not found
    if (error.Code === 'NoSuchKey' || error.name === 'NoSuchKey') {
      try {
        const defaultImageBuffer = await getDefaultImageBuffer();
        return new Response(defaultImageBuffer, {
          status: 200,
          headers: {
            'Content-Type': 'image/jpeg', // or image/png if your default is png
            'Cache-Control': 'public, max-age=3600',
          },
        });
      } catch {
        return new Response('Image not found', { status: 404 });
      }
    }
    return new Response('Image not found', { status: 404 });
  }
}
