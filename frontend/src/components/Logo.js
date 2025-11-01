// frontend/src/components/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ size = 28 }) {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="Study Resources Hub - Home">
      {/* Mortarboard icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className="text-blue-600 group-hover:text-blue-700 transition"
      >
        <path
          d="M32 6L4 18l28 12 24-10.3V40h4V17.7L32 6z"
          fill="currentColor"
        />
        <path
          d="M14 30v8c0 4.4 8.1 8 18 8s18-3.6 18-8v-8l-18 7.6L14 30z"
          fill="#93C5FD"
        />
        <circle cx="56" cy="40" r="3" fill="currentColor" />
      </svg>

      {/* Wordmark */}
      <span className="font-semibold tracking-tight text-gray-900 text-lg">
        Study<span className="text-blue-600">Hub</span>
      </span>
    </Link>
  );
}
