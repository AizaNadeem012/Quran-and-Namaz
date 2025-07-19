import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, course, message } = data;

    // Split the full name into first and last names
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Insert into Supabase
    const { data: submission, error } = await supabase
      .from('registrations')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          country,
          course,
          message,
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 