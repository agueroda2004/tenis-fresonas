import React from "react";

export default function SpinLoading({ className = "", size = 24 }) {
  return (
    <span
      className={`material-symbols-outlined animate-spin  text-3xl ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      progress_activity
    </span>
  );
}
