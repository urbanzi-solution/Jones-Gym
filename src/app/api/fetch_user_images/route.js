import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const REGION = 'auto';
const ENDPOINT = process.env.R2_ENDPOINT;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.R2_BUCKET;

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

  // Try all relevant extensions
  const extensions = ['png', 'jpg', 'jpeg'];
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
      const imageBuffer = Buffer.concat(chunks);
      const contentType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
      return new Response(imageBuffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600',
        },
      });
    } catch (error) {
      if (error.Code !== 'NoSuchKey' && error.name !== 'NoSuchKey') {
        return new Response('Image not found', { status: 404 });
      }
      // Otherwise, try next extension
    }
  }

  return new Response('Image not found', { status: 404 });
}
