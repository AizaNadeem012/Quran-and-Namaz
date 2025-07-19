import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'submissions.json');

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { firstName, lastName, email, phone, country, course, message } = data;

    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      registrations = JSON.parse(fileData);
    }
    const index = registrations.findIndex((r: any) => r.id === id);
    if (index === -1) {
      return NextResponse.json({ message: 'Registration not found.' }, { status: 404 });
    }
    registrations[index] = {
      ...registrations[index],
        firstName,
        lastName,
        email,
        phone,
        country,
        course,
        message,
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));
    return NextResponse.json(registrations[index]);
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json({ message: 'Failed to update registration.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      registrations = JSON.parse(fileData);
    }
    const index = registrations.findIndex((r: any) => r.id === id);
    if (index === -1) {
      return NextResponse.json({ message: 'Registration not found.' }, { status: 404 });
    }
    registrations.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));
    return NextResponse.json({ message: 'Registration deleted successfully.' });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json({ message: 'Failed to delete registration.' }, { status: 500 });
  }
} 