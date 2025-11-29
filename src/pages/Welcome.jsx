// import React from "react";

// export default function Welcome({ onExplore }) {
//   return (
//     <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
//       {/* Background Decor (Blobs) */}
//       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1A73E8]/20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center space-y-8 animate-fade-in p-6">
//         {/* Logo Icon (Large) */}
//         <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[#1A73E8] to-purple-600 rounded-2xl rotate-3 shadow-[0_0_30px_rgba(26,115,232,0.5)] flex items-center justify-center mb-6">
//           <svg
//             className="w-12 h-12 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//             />
//           </svg>
//         </div>

//         {/* Text */}
//         <div className="space-y-2">
//           <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//             Course Explorer
//           </h1>
//           <p className="text-xl text-slate-400 font-light tracking-widest uppercase">
//             By Shakti Priya
//           </p>
//         </div>

//         {/* Explore Button */}
//         <button
//           onClick={onExplore}
//           className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-[#1A73E8] text-[#1A73E8] font-bold text-lg transition-all hover:text-white hover:shadow-[0_0_30px_rgba(26,115,232,0.6)] mt-8"
//         >
//           <div className="absolute inset-0 w-0 bg-[#1A73E8] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
//           <span className="relative z-10 flex items-center gap-2">
//             Start Exploring
//             <span className="group-hover:translate-x-1 transition-transform">
//               →
//             </span>
//           </span>
//         </button>
//       </div>

//       {/* Footer Text */}
//       <div className="absolute bottom-8 text-slate-600 text-sm">
//         Built with React, Vite & Tailwind CSS
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Welcome({ onExplore }) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor (Blobs) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1A73E8]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 animate-fade-in p-6">
        {/* --- LOGO SECTION CHANGED HERE --- */}
        {/* We keep the outer div for the glowing gradient effect */}
        <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-[#1A73E8] to-purple-600 rounded-3xl rotate-3 shadow-[0_0_40px_rgba(26,115,232,0.6)] flex items-center justify-center mb-8 p-1">
          {/* We replaced the <svg> with this <img> tag */}
          {/* Note the path starts with '/' which looks in the public folder */}
          <img
            src="/logo.png"
            alt="Shakti Priya Logo"
            className="w-full h-full object-contain rounded-2xl -rotate-3"
          />
        </div>
        {/* --------------------------------- */}

        {/* Text */}
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
