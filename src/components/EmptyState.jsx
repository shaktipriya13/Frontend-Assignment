import React from "react";

export default function EmptyState({ title, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center h-full border border-dashed border-white/10 rounded-xl bg-white/5">
      <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-[#1A73E8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-white mb-1">{title}</h2>
      <p className="text-sm text-slate-400 max-w-sm">{message}</p>
    </div>
  );
}
