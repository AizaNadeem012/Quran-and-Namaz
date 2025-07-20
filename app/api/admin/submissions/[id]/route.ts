import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import fs from 'fs';
import path from 'path';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const filePath = path.join(process.cwd(), 'submissions.json');

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  updatedAt?: string;
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    const { firstName, lastName, email, subject, message } = await req.json();

    let submissions: Submission[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileData);
    }
    const index = submissions.findIndex((s: Submission) => s.id === id);
    if (index === -1) {
      return NextResponse.json({ message: 'Submission not found' }, { status: 404 });
    }
    submissions[index] = {
      ...submissions[index],
      firstName,
      lastName,
      email,
      subject,
      message,
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    return NextResponse.json(submissions[index], { status: 200 });
  } catch (error) {
    console.error('Error updating contact submission:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    let submissions: Submission[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileData);
    }
    const index = submissions.findIndex((s: Submission) => s.id === id);
    if (index === -1) {
      return NextResponse.json({ message: 'Submission not found' }, { status: 404 });
    }
    submissions.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    return NextResponse.json({ message: 'Submission deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 