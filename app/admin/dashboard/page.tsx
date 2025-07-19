"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  message: string;
  createdAt: string; // ISO string
}

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRegistration, setEditingRegistration] = useState<Registration | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/registrations');
      if (res.ok) {
        const data = await res.json();
        setRegistrations(data);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch registrations.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast({
        title: 'Error',
        description: 'Network error, failed to fetch registrations.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (registration: Registration) => {
    setEditingRegistration({ ...registration });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingRegistration) {
      setEditingRegistration({
        ...editingRegistration,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSaveEdit = async () => {
    if (!editingRegistration) return;

    try {
      const res = await fetch(`/api/admin/registrations/${editingRegistration.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingRegistration),
      });

      if (res.ok) {
        toast({
          title: 'Success',
          description: 'Registration updated successfully.',
        });
        setIsEditDialogOpen(false);
        fetchRegistrations(); // Refresh the list
      } else {
        const errorData = await res.json();
        toast({
          title: 'Error',
          description: errorData.message || 'Failed to update registration.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error saving registration:', error);
      toast({
        title: 'Error',
        description: 'Network error, failed to update registration.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmationId(id);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmationId) return;

    try {
      const res = await fetch(`/api/admin/registrations/${deleteConfirmationId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        toast({
          title: 'Success',
          description: 'Registration deleted successfully.',
        });
        fetchRegistrations(); // Refresh the list
      } else {
        const errorData = await res.json();
        toast({
          title: 'Error',
          description: errorData.message || 'Failed to delete registration.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error deleting registration:', error);
      toast({
        title: 'Error',
        description: 'Network error, failed to delete registration.',
        variant: 'destructive',
      });
    } finally {
      setDeleteConfirmationId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard (Registrations)</h2>
          <Button onClick={async () => {
            await fetch('/api/admin/logout');
            router.push('/admin/login');
          }}>Sign Out</Button>
        </div>

        {loading ? (
          <p>Loading registrations...</p>
        ) : registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell>{`${registration.firstName} ${registration.lastName}`}</TableCell>
                  <TableCell>{registration.email}</TableCell>
                  <TableCell>{registration.phone}</TableCell>
                  <TableCell>{registration.country}</TableCell>
                  <TableCell>{registration.course}</TableCell>
                  <TableCell className="truncate max-w-xs">{registration.message}</TableCell>
                  <TableCell>{new Date(registration.createdAt).toLocaleString()}</TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditClick(registration)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(registration.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Registration</DialogTitle>
            </DialogHeader>
            {editingRegistration && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="firstName" className="text-right">First Name</label>
                  <Input id="firstName" name="firstName" value={editingRegistration.firstName} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="lastName" className="text-right">Last Name</label>
                  <Input id="lastName" name="lastName" value={editingRegistration.lastName} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="email" className="text-right">Email</label>
                  <Input id="email" name="email" value={editingRegistration.email} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="phone" className="text-right">Phone</label>
                  <Input id="phone" name="phone" value={editingRegistration.phone} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="country" className="text-right">Country</label>
                  <Input id="country" name="country" value={editingRegistration.country} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="course" className="text-right">Course</label>
                  <Input id="course" name="course" value={editingRegistration.course} onChange={handleEditChange} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="message" className="text-right">Message</label>
                  <Textarea id="message" name="message" value={editingRegistration.message} onChange={handleEditChange} className="col-span-3" />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSaveEdit}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={!!deleteConfirmationId} onOpenChange={() => setDeleteConfirmationId(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Are you sure you want to delete this registration? This action cannot be undone.</p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteConfirmationId(null)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmDelete}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 