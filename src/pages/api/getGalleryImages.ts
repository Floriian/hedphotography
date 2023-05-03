import { readdirSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextRequest, res: NextResponse) => {
  const dir = path.resolve('./public/gallery');

  const files = await readdirSync(dir);
  const images = files.map((name) => {
    return {
      name,
      publicUrl: path.join('/', 'gallery', name),
    };
  });
  //@ts-ignore
  res.json(images);
};
