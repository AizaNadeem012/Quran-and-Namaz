import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'submissions.json');

export async function GET() {
  try {
    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      registrations = JSON.parse(fileData);
    }
    registrations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json({ message: 'Failed to fetch registrations.' }, { status: 500 });
  }
} 