import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'CV-FelipeAlarconContreras.pdf');
  if (fs.existsSync(filePath)) {
    const fileStat = fs.statSync(filePath);

    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${path.basename(filePath)}`,
      'Content-Length': fileStat.size.toString(),
    });

    const fileStream = fs.createReadStream(filePath);
    return new NextResponse(fileStream, { headers });
  } else {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}