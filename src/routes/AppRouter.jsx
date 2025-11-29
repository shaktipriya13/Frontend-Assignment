// import React from "react";
// import { Routes, Route, Link, useLocation } from "react-router-dom";
// import Home from "../pages/Home";
// import Admin from "../pages/Admin";

// export default function AppRouter() {
//   const location = useLocation();

//   const NavLink = ({ to, children }) => {
//     const isActive = location.pathname === to;
//     return (
//       <Link
//         to={to}
//         aria-current={isActive ? "page" : undefined}
//         className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
//           isActive
//             ? "bg-[#1A73E8] text-white shadow-[0_0_15px_rgba(26,115,232,0.4)]"
//             : "text-slate-400 hover:text-white hover:bg-white/5"
//         }`}
//       >
//         {children}
//       </Link>
//     );
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* 1. Skip Link for Accessibility */}
//       <a href="#main-content" className="skip-link">
//         Skip to Main Content
//       </a>

//       {/* NAVBAR */}
//       <header className="sticky top-0 z-50 p-4" role="banner">
//         <div className="container mx-auto glass-panel rounded-2xl px-6 py-3 flex justify-between items-center">
//           <Link
//             className="font-bold text-xl tracking-tight flex items-center gap-2 focus:outline-none rounded-lg"
//             to="/"
//             aria-label="Course Explorer Home"
//           >
//             <div className="w-3 h-3 rounded-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8]"></div>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
//               Course Explorer
//             </span>
//           </Link>
//           <nav className="flex space-x-2" aria-label="Main Navigation">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/admin">Admin</NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content Area with ID for Skip Link */}
//       <main
//         id="main-content"
//         className="flex-1 container mx-auto p-4 animate-fade-in"
//         role="main"
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";

export default function AppRouter() {
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        aria-current={isActive ? "page" : undefined}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
          isActive
            ? "bg-[#1A73E8] text-white shadow-[0_0_15px_rgba(26,115,232,0.4)]"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 p-4" role="banner">
        {/* CHANGED: Replaced 'container' with 'w-full max-w-[98%]' */}
        <div className="w-full max-w-[98%] mx-auto glass-panel rounded-2xl px-6 py-3 flex justify-between items-center">
          <Link
            className="font-bold text-xl tracking-tight flex items-center gap-2 focus:outline-none rounded-lg"
            to="/"
            aria-label="Course Explorer Home"
          >
            <div className="w-3 h-3 rounded-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8]"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Course Explorer
            </span>
          </Link>
          <nav className="flex space-x-2" aria-label="Main Navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content Area with ID for Skip Link */}
      {/* CHANGED: Replaced 'container' with 'w-full max-w-[98%]' */}
      <main
        id="main-content"
        className="flex-1 w-full max-w-[98%] mx-auto p-4 animate-fade-in"
        role="main"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}
