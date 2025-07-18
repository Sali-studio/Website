import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const counterFilePath = path.join(process.cwd(), 'data', 'counter.txt');

async function readCounter() {
  try {
    const data = await fs.readFile(counterFilePath, 'utf8');
    return parseInt(data || '0', 10);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // ファイルが存在しない場合は0を返す
      return 0;
    }
    console.error('Error reading counter file:', error);
    return 0;
  }
}

async function writeCounter(count: number) {
  try {
    // ディレクトリが存在しない場合は作成
    await fs.mkdir(path.dirname(counterFilePath), { recursive: true });
    await fs.writeFile(counterFilePath, count.toString(), 'utf8');
  } catch (error) {
    console.error('Error writing counter file:', error);
  }
}

export async function GET() {
  const count = await readCounter();
  return NextResponse.json({ count });
}

export async function POST() {
  let count = await readCounter();
  count++;
  await writeCounter(count);
  return NextResponse.json({ count });
}
