import { NextResponse, NextRequest } from 'next/server';
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

const countedIpsFilePath = path.join(process.cwd(), 'data', 'counted_ips.txt');async function readCountedIps() {  try {    const data = await fs.readFile(countedIpsFilePath, 'utf8');    return new Set(data.split('\n').filter(ip => ip.trim() !== ''));  } catch (error) {    if (error.code === 'ENOENT') {      return new Set();    }    console.error('Error reading counted IPs file:', error);    return new Set();  }}async function writeCountedIps(ips: Set<string>) {  try {    await fs.mkdir(path.dirname(countedIpsFilePath), { recursive: true });    await fs.writeFile(countedIpsFilePath, Array.from(ips).join('\n'), 'utf8');  } catch (error) {    console.error('Error writing counted IPs file:', error);  }}export async function POST(req: NextRequest) {
  let ip = req.headers.get('x-forwarded-for');
  if (!ip) {
    ip = req.headers.get('x-real-ip');
  }
  if (!ip) {
    ip = req.ip; // NextRequest's ip property
  }

  if (!ip) {
    console.error('IP address could not be determined.');
    return NextResponse.json({ message: 'IP address not found' }, { status: 400 });
  }

  try {
    let countedIps = await readCountedIps();

    if (countedIps.has(ip)) {
      const count = await readCounter();
      return NextResponse.json({ count });
    }

    let count = await readCounter();
    count++;
    await writeCounter(count);

    countedIps.add(ip);
    await writeCountedIps(countedIps);

    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error in POST /api/counter:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
