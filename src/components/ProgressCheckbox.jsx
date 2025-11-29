import React from "react";

export default function ProgressCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group select-none">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only" // Hide default checkbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {/* Custom Box */}
        <div
          className={`w-5 h-5 rounded border transition-all duration-300 flex items-center justify-center
          ${
            checked
              ? "bg-[#1A73E8] border-[#1A73E8] shadow-[0_0_10px_rgba(26,115,232,0.5)]"
              : "bg-white/5 border-white/20 group-hover:border-[#1A73E8]/50"
          }`}
        >
          {/* Checkmark Icon */}
          <svg
            className={`w-3.5 h-3.5 text-white transform transition-transform duration-300 ${
              checked ? "scale-100" : "scale-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <span
        className={`text-sm font-medium transition-colors ${
          checked ? "text-white" : "text-slate-400 group-hover:text-slate-200"
        }`}
      >
        {checked ? "Completed" : "Mark as Complete"}
      </span>
    </label>
  );
}
