import {adminAuth} from 'lib/fireadmin'
import { NextResponse } from 'next/server'

type Query = {
  id: string;
  uid?: string;
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const uid = searchParams.get('uid')

  if (!uid) {
    return NextResponse.json({ status: 400 })
  }
  try {
    await adminAuth.deleteUser(uid);
    console.log('アカウントを削除しました');
  } catch (error) {
    console.error('アカウント削除エラー:', error);
  }
}
