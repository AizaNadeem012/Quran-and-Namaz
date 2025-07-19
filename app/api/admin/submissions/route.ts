import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import fs from 'fs';
import path from 'path';
import { authOptions } from '../../auth/[...nextauth]/route';

const filePath = path.join(process.cwd(), 'submissions.json');

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileData);
    }
    // Sort by createdAt descending
    submissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 