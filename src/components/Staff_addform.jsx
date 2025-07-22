// src\components\Staff_addform.jsx
"use client";
import { GrClose } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function member_addpage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    
    try {
      let profilePicturePath = null;
      
      // Check if a profile picture was uploaded
      const profilePictureFile = formData.get('profilePicture');
      if (profilePictureFile && profilePictureFile.size > 0) {
        console.log('Uploading profile picture...');
        
        // Create form data for image upload
        const imageFormData = new FormData();
        imageFormData.append('profilePicture', profilePictureFile);
        imageFormData.append('gym_id', formData.get('gymID'));
        
        // Upload the image first
        const imageResponse = await fetch('/api/upload_trainer_pic', {
          method: 'POST',
          body: imageFormData,
        });
        
        if (!imageResponse.ok) {
          const imageError = await imageResponse.json();
          throw new Error(imageError.error || 'Failed to upload profile picture');
        }
        
        const imageResult = await imageResponse.json();
        profilePicturePath = imageResult.filePath;
        console.log('Profile picture uploaded successfully:', profilePicturePath);
      }
      
      // Prepare the staff data (excluding the file)
      const staffData = {
        gymID: formData.get('gymID'),
        fullName: formData.get('fullName'),
        gender: formData.get('gender'),
        dob: formData.get('dob'),
        location: formData.get('location'),
        phone: formData.get('phone'),
        whatsapp: formData.get('whatsapp'),
        joiningdate: formData.get('joiningdate'),
        profilePicturePath: profilePicturePath // Include the uploaded image path
      };
      
      console.log('Submitting staff data:', staffData);
      
      // Submit the staff data to your main route
      const response = await fetch('/api/add_staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      });

      if (!response.ok) {
        throw new Error('Failed to add staff member');
      }

      const result = await response.json();
      if (result.success) {
        router.push('/staff'); // Redirect to staff list
      } else {
        setError(result.message || 'An error occurred');
      }
      
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box">
      <div className="flex justify-between items-center text-xl pb-2 border-b md:text-2xl">
        <h2>Add Staff</h2>
        <GrClose className="cursor-pointer hover:scale-90 hover:bg-black" onClick={() => router.back()} />
      </div>
      
      {error && <div className="mt-4 text-red-500">{error}</div>}

      <form onSubmit={handleSubmit} className="mt-5">
        {/* Grid layout for responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Gym ID */}
            <div>
              <label htmlFor="gymID" className="block text-sm font-medium mb-1 text-gray-300">
                Trainer ID *
              </label>
              <input
                type="text"
                id="gymID"
                name="gymID"
                placeholder="Enter trainer ID"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Gender Dropdown */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-1 text-gray-300">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium mb-1 text-gray-300">
                Date of Birth *
              </label>
              <div>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1 text-gray-300">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-300">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-gray-300">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="Enter WhatsApp number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* Joining date */}
            <div>
              <label htmlFor="joiningdate" className="block text-sm font-medium mb-1 text-gray-300">
                Joining date *
              </label>
              <div>
                <input
                  type="date"
                  id="joiningdate"
                  name="joiningdate"
                  className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                  required
                />
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Profile Picture *
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#3E3A3D] rounded-lg cursor-pointer bg-[#232024] hover:bg-[#2E2A2D]">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {selectedFile ? (
                      <>
                        <svg className="w-8 h-8 mb-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-sm text-green-400 text-center">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </>
                    ) : (
                      <>
                        <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="text-sm text-gray-400">Click to upload image</p>
                      </>
                    )}
                  </div>
                  <input 
                    type="file" 
                    name="profilePicture" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              {selectedFile && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    // Reset the file input
                    const fileInput = document.querySelector('input[name="profilePicture"]');
                    if (fileInput) fileInput.value = '';
                  }}
                  className="mt-2 text-sm text-red-400 hover:text-red-300"
                >
                  Remove file
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => router.back()}
            type="button"
            className="px-6 py-2.5 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2.5 text-white rounded-lg transition-colors ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}