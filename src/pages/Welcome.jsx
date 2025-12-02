import React from "react";

export default function Welcome({ onExplore }) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1A73E8]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>

      
      <div className="relative z-10 text-center space-y-8 animate-fade-in p-6">
        
        <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-[#1A73E8] to-purple-600 rounded-3xl rotate-3 shadow-[0_0_40px_rgba(26,115,232,0.6)] flex items-center justify-center mb-8 p-1">
         
          <img
            src="/logo.png"
            alt="Shakti Priya Logo"
            className="w-full h-full object-contain rounded-2xl -rotate-3"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Course Explorer
          </h1>
          <p className="text-xl text-slate-400 font-light tracking-widest mt-4">
            Designed & Developed by Shakti Priya
          </p>
        </div>

        {/* Explore Button */}
        <button
          onClick={onExplore}
          className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-[#1A73E8] text-[#1A73E8] font-bold text-lg transition-all hover:text-white hover:shadow-[0_0_30px_rgba(26,115,232,0.6)] mt-8"
        >
          <div className="absolute inset-0 w-0 bg-[#1A73E8] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
          <span className="relative z-10 flex items-center gap-2">
            Start Exploring
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 text-slate-600 text-sm">
        Built with React, Vite & Tailwind CSS
      </div>
    </div>
  );
}
