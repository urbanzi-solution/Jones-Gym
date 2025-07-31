import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const config = {
  api: { bodyParser: false }
};

export async function POST(request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.startsWith('multipart/form-data')) {
    return new Response(JSON.stringify({ error: 'Unsupported content type' }), { status: 415 });
  }

  try {
    const formData = await request.formData();
    const gymId = formData.get('gym_id');
    const file = formData.get('profilePicture');
    const category = formData.get('category');

    if (!gymId) {
      return new Response(JSON.stringify({ error: 'gym_id is required' }), { status: 400 });
    }
    if (!file || typeof file === 'string') {
      return new Response(JSON.stringify({ error: 'profilePicture is required' }), { status: 400 });
    }

    const validCategories = ['user', 'trainer', 'equipment', 'classes'];
    const selectedCategory = category && validCategories.includes(category) ? category : 'trainers';

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const s3 = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });

    // Create organized key with category prefix
    const fileExtension = file.name ? file.name.split('.').pop() : 'jpg';
    const timestamp = Date.now();
    const objectKey = `${selectedCategory}/${gymId}.${fileExtension}`;

    const uploadResult = await s3.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: objectKey, // Now includes category prefix
      Body: fileBuffer,
      ContentType: file.type || 'application/octet-stream',
    }));

    return new Response(JSON.stringify({ 
      success: true, 
      key: objectKey, 
      category: selectedCategory,
      uploadResult 
    }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Upload failed: ' + err.message }), { status: 500 });
  }
}
