import { NextResponse } from 'next/server';
import { S3Client, DeleteObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.R2_BUCKET;

// Helper to check if file exists
async function fileExists(Key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key }));
    return true;
  } catch (err) {
    return false;
  }
}

// Accepts: query params (?member_id=...&ext=...)
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const member_id = searchParams.get('member_id');
  const ext = searchParams.get('ext'); // e.g. "png"
  if (!member_id || !ext) {
    return NextResponse.json({ message: 'member_id and ext required.' }, { status: 400 });
  }
  const folders = ['users/', 'trainers/'];

  let found = false;
  let lastKey = '';
  for (const folder of folders) {
    const Key = `${folder}${member_id}.${ext}`;
    lastKey = Key;
    if (await fileExists(Key)) {
      await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key }));
      found = true;
      break;
    }
  }
  if (found) {
    return NextResponse.json({ message: `Deleted ${lastKey}` });
  }
  return NextResponse.json({ message: 'File not found.' }, { status: 404 });
}
