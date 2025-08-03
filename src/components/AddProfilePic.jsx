"use client";
import React, { useState, useRef } from "react";

const AddProfilePic = ({ member_id, onSubmit, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setError("");
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!selectedFile) return;
    setUploading(true);

    try {
      // Get the file extension
      const ext = selectedFile.name.split('.').pop();
      const newFileName = `${member_id}.${ext}`;

      // Create a new File object with the new name
      const renamedFile = new File([selectedFile], newFileName, {
        type: selectedFile.type,
      });

      // Prepare FormData to send to API
      const formData = new FormData();
      formData.append("profilePicture", renamedFile);
      formData.append("gym_id", member_id); // or another gym_id if needed, here using member_id per your context

      // Optionally add a category (if the backend expects it)
      // formData.append("category", "user");

      // Send to your API route
      const response = await fetch("/api/upload_profile_picture", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Upload failed.");
      }

      // If onSubmit exists, call handler with the result
      if (onSubmit) await onSubmit(result);

      setUploading(false);
      handleRemoveFile();
    } catch (err) {
      setError(
        err?.message || "Failed to upload. Please try again."
      );
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">
          Upload Profile Picture *
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#3E3A3D] rounded-lg cursor-pointer bg-[#232024] hover:bg-[#2E2A2D]">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {selectedFile ? (
                <>
                  <svg className="w-8 h-8 mb-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-sm text-green-400 text-center">{selectedFile.name}</p>
                  <p className="text-xs text-gray-400">
                    ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="profile preview"
                      className="mt-2 w-16 h-16 object-cover rounded-full border-2 border-gray-500"
                    />
                  )}
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
              ref={fileInputRef}
              required
            />
          </label>
        </div>
        {selectedFile && (
          <button
            type="button"
            onClick={handleRemoveFile}
            className="mt-2 text-sm text-red-400 hover:text-red-300"
            disabled={uploading}
          >
            Remove file
          </button>
        )}
      </div>
      {/* ACTION BUTTONS */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={uploading}
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!selectedFile || uploading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </div>
      {/* ERROR MESSAGE */}
      {error && (
        <div className="mt-2 text-sm text-red-500 text-center">{error}</div>
      )}
    </form>
  );
};

export default AddProfilePic;
