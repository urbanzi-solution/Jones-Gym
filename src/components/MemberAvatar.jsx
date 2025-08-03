"use client";
import { useState } from "react";

export default function MemberAvatar({ member }) {
  const [imgError, setImgError] = useState(false);

  if (!member.user_id || imgError) {
    // Show SVG avatar if no user_id or load error
    return (
      <span className="w-16 h-16 sm:h-22 sm:w-22 lg:w-40 lg:h-40 flex items-center justify-center bg-gray-300 rounded-full">
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="currentColor"
          className="text-gray-500"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-5 0-8 2.5-8 4v2h16v-2c0-1.5-3-4-8-4z" />
        </svg>
      </span>
    );
  }

  return (
    <img
      loading="lazy"
      className="w-16 h-16 sm:h-22 sm:w-22 lg:w-40 lg:h-40 object-cover border-2 rounded-full"
      src={`/api/fetch_user_images?user_id=${member.user_id}`}
      alt={member.name || "Member"}
      onError={() => setImgError(true)}
    />
  );
}
