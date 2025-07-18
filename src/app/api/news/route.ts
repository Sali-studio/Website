import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const newsFilePath = path.join(process.cwd(), 'data', 'news.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(newsFilePath, 'utf8');
    const news = JSON.parse(fileContents);
    // 最新のニュースが上に来るようにソート（日付と時刻で降順）
    news.sort((a: any, b: any) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB.getTime() - dateA.getTime();
    });
    return NextResponse.json(news);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return NextResponse.json([], { status: 200 }); // ファイルが存在しない場合は空の配列を返す
    }
    console.error('Error reading news file:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
