import React, { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Disappear after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-fade-in-up">
      <div className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(26,115,232,0.5)] flex items-center gap-3 border border-white/10 font-medium">
        <div className="bg-white/20 rounded-full p-1">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {message}
      </div>
    </div>
  );
}
