"use client";
import { useState } from 'react';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const countries = [
  'United Kingdom',
  'United States',
  'Pakistan',
  'India',
  'Bangladesh',
  'UAE',
  'Saudi Arabia',
  'Other',
];

const courses = [
  'Quran Reading (Nazra)',
  'Tajweed Excellence',
  'Arabic Language',
];

export function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.country || !form.course) {
      setError('Please fill all required fields.');
      return;
    }
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Failed to send registration. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send registration. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</div>
        <div className="text-slate-600">Thank you for registering. We will contact you soon.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
          <Input id="name" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
          <Input id="phone" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-slate-700">Country *</label>
          <select id="country" name="country" value={form.country} onChange={handleChange} required className="border-slate-300 focus:border-blue-500 rounded-lg w-full py-2 px-3">
            <option value="">Select country</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="course" className="text-sm font-medium text-slate-700">Course *</label>
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          className="border-slate-300 focus:border-blue-500 rounded-xl w-full py-3 px-4 shadow-sm text-base font-medium bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-150"
        >
          <option value="">Select course</option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
        <Textarea id="message" name="message" placeholder="Your message (optional)" value={form.message} onChange={handleChange} />
      </div>
      <Button type="submit" className="w-full bg-[#060957] hover:bg-[#060957] text-white rounded-lg">Register</Button>
    </form>
  );
} 