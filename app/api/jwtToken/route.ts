import { verifyIdToken } from 'lib/fireadmin';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const headersList = headers()
    const authorization = headersList.get('authorization')
    const token = authorization?.replace("Bearer ", "");
    if(token){
      const decodedToken = await verifyIdToken(token);
      NextResponse.json({ message: 'トークンが有効です' }, { status: 200 });
    } else {
      NextResponse.json({ error: 'トークンが提供されていません' }, { status: 400 });
    }
  } catch (error) {
    console.error('トークン検証エラー:', error);
    NextResponse.json({ error: 'トークンが無効です' }, { status: 401 });
  }
  
}
