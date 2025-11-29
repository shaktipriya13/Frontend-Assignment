import React from "react";

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center h-full">
      <div className="relative w-10 h-10 mb-4">
        {/* Spinning Ring */}
        <div className="absolute inset-0 border-4 border-[#1A73E8]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#1A73E8] rounded-full border-t-transparent animate-spin"></div>
      </div>
      <div className="text-slate-400 text-sm font-medium animate-pulse">
        Loading resources...
      </div>
    </div>
  );
}
