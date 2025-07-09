// src/components/FallbackImage.jsx
'use client'

export default function FallbackImage({ 
  src, 
  alt, 
  className, 
  fallbackSrc = "/images/user1.jpg" 
}) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = fallbackSrc;
      }}
    />
  );
}