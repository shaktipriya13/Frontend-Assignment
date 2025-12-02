import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <h1 className="text-9xl font-bold text-[#1A73E8] opacity-20">404</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
        <p className="text-slate-400">
          The path you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#1A73E8] hover:bg-blue-600 text-white rounded-lg transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
