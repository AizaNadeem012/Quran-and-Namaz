import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'submissions.json');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, course, message } = data;

    // Split the full name into first and last names
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Read existing submissions
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileData);
    }

    // Add new submission
    const newSubmission = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      country,
      course,
      message,
      createdAt: new Date().toISOString(),
    };
    submissions.push(newSubmission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 