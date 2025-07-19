import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { firstName, lastName, email, phone, country, course, message } = data;

    const { data: registration, error } = await supabase
      .from('registrations')
      .update({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        country,
        course,
        message,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ message: 'Failed to update registration.' }, { status: 500 });
    }

    if (!registration) {
      return NextResponse.json({ message: 'Registration not found.' }, { status: 404 });
    }

    return NextResponse.json(registration);
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json({ message: 'Failed to update registration.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { error } = await supabase
      .from('registrations')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ message: 'Failed to delete registration.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration deleted successfully.' });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json({ message: 'Failed to delete registration.' }, { status: 500 });
  }
} 