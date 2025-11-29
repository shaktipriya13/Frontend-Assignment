// // // import React, { useState, useMemo } from "react";
// // // import SearchBar from "./SearchBar"; // Ensure you have this component
// // // import { Link, useLocation } from "react-router-dom";

// // // export default function Sidebar({ courses, progressMap = {} }) {
// // //   const [query, setQuery] = useState("");
// // //   const location = useLocation();

// // //   const filtered = useMemo(() => {
// // //     const q = query.toLowerCase();
// // //     return courses.filter(
// // //       (c) =>
// // //         c.title.toLowerCase().includes(q) ||
// // //         c.topics.some((t) => t.title.toLowerCase().includes(q))
// // //     );
// // //   }, [query, courses]);

// // //   // Helper to calculate progress for a specific course
// // //   const getProgress = (course) => {
// // //     let total = 0;
// // //     let completed = 0;

// // //     course.topics.forEach((topic, ti) => {
// // //       topic.subtopics.forEach((_, si) => {
// // //         total++;
// // //         const key = `${course.id}::${ti}::${si}`;
// // //         if (progressMap[key]) completed++;
// // //       });
// // //     });

// // //     return total === 0 ? 0 : Math.round((completed / total) * 100);
// // //   };

// // //   return (
// // //     <aside className="glass-panel p-4 rounded-xl flex-1 flex flex-col overflow-hidden">
// // //       <div className="mb-4">
// // //         <SearchBar value={query} onChange={setQuery} />
// // //       </div>

// // //       <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2 flex-1">
// // //         {filtered.map((c) => {
// // //           const isActive = location.search.includes(`course=${c.id}`);
// // //           const percent = getProgress(c);

// // //           return (
// // //             <Link
// // //               key={c.id}
// // //               to={`/?course=${c.id}`}
// // //               className={`group block p-3 rounded-lg border transition-all duration-200 relative overflow-hidden ${
// // //                 isActive
// // //                   ? "bg-[#1A73E8]/10 border-[#1A73E8]/50 shadow-[inset_0_0_10px_rgba(26,115,232,0.1)]"
// // //                   : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
// // //               }`}
// // //             >
// // //               <div className="relative z-10">
// // //                 <div className="flex justify-between items-start mb-1">
// // //                   <div
// // //                     className={`font-medium text-sm ${
// // //                       isActive
// // //                         ? "text-[#1A73E8]"
// // //                         : "text-slate-200 group-hover:text-white"
// // //                     }`}
// // //                   >
// // //                     {c.title}
// // //                   </div>
// // //                   {percent > 0 && (
// // //                     <span
// // //                       className={`text-[10px] font-bold ${
// // //                         isActive ? "text-[#1A73E8]" : "text-slate-500"
// // //                       }`}
// // //                     >
// // //                       {percent}%
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //                 <div className="text-xs text-slate-500 truncate group-hover:text-slate-400 mb-2">
// // //                   {c.subtitle}
// // //                 </div>

// // //                 {/* Mini Progress Bar */}
// // //                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
// // //                   <div
// // //                     className={`h-full rounded-full transition-all duration-500 ${
// // //                       isActive ? "bg-[#1A73E8]" : "bg-slate-600"
// // //                     }`}
// // //                     style={{ width: `${percent}%` }}
// // //                   ></div>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           );
// // //         })}
// // //       </div>
// // //     </aside>
// // //   );
// // // }
// // import React, { useState, useMemo } from "react";
// // import SearchBar from "./SearchBar";
// // import { Link, useLocation } from "react-router-dom";

// // export default function Sidebar({ courses, progressMap = {} }) {
// //   const [query, setQuery] = useState("");
// //   const location = useLocation();

// //   const filtered = useMemo(() => {
// //     const q = query.toLowerCase();
// //     return courses.filter(
// //       (c) =>
// //         c.title.toLowerCase().includes(q) ||
// //         c.topics.some((t) => t.title.toLowerCase().includes(q))
// //     );
// //   }, [query, courses]);

// //   const getProgress = (course) => {
// //     let total = 0;
// //     let completed = 0;
// //     course.topics.forEach((topic, ti) => {
// //       topic.subtopics.forEach((_, si) => {
// //         total++;
// //         const key = `${course.id}::${ti}::${si}`;
// //         if (progressMap[key]) completed++;
// //       });
// //     });
// //     return total === 0 ? 0 : Math.round((completed / total) * 100);
// //   };

// //   return (
// //     <aside
// //       className="glass-panel p-4 rounded-xl flex-1 flex flex-col overflow-hidden"
// //       aria-label="Course Selection"
// //     >
// //       <div className="mb-4" role="search">
// //         <SearchBar
// //           value={query}
// //           onChange={setQuery}
// //           aria-label="Filter courses"
// //         />
// //       </div>

// //       {/* Semantic List for Screen Readers */}
// //       <nav aria-label="Courses list" className="flex-1 overflow-hidden">
// //         <ul className="space-y-3 overflow-y-auto custom-scrollbar pr-2 h-full">
// //           {filtered.map((c) => {
// //             const isActive = location.search.includes(`course=${c.id}`);
// //             const percent = getProgress(c);

// //             return (
// //               <li key={c.id}>
// //                 <Link
// //                   to={`/?course=${c.id}`}
// //                   aria-current={isActive ? "page" : undefined}
// //                   className={`group block p-3 rounded-lg border transition-all duration-200 relative overflow-hidden focus:outline-none ${
// //                     isActive
// //                       ? "bg-[#1A73E8]/10 border-[#1A73E8]/50 shadow-[inset_0_0_10px_rgba(26,115,232,0.1)]"
// //                       : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
// //                   }`}
// //                 >
// //                   <div className="relative z-10">
// //                     <div className="flex justify-between items-start mb-1">
// //                       <div
// //                         className={`font-medium text-sm ${
// //                           isActive
// //                             ? "text-[#1A73E8]"
// //                             : "text-slate-200 group-hover:text-white"
// //                         }`}
// //                       >
// //                         {c.title}
// //                       </div>
// //                       {percent > 0 && (
// //                         <span
// //                           className={`text-[10px] font-bold ${
// //                             isActive ? "text-[#1A73E8]" : "text-slate-500"
// //                           }`}
// //                           aria-label={`${percent}% completed`}
// //                         >
// //                           {percent}%
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="text-xs text-slate-500 truncate group-hover:text-slate-400 mb-2">
// //                       {c.subtitle}
// //                     </div>

// //                     {/* Hidden from screen readers as text percentage is already read above */}
// //                     <div
// //                       className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
// //                       aria-hidden="true"
// //                     >
// //                       <div
// //                         className={`h-full rounded-full transition-all duration-500 ${
// //                           isActive ? "bg-[#1A73E8]" : "bg-slate-600"
// //                         }`}
// //                         style={{ width: `${percent}%` }}
// //                       ></div>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>
// //     </aside>
// //   );
// // }
// import React, { useState, useMemo, useRef } from "react";
// import SearchBar from "./SearchBar";
// import { Link, useLocation } from "react-router-dom";

// export default function Sidebar({ courses, progressMap = {} }) {
//   const [query, setQuery] = useState("");
//   const location = useLocation();
//   const listRef = useRef(null); // Ref to container for keyboard logic

//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return courses.filter(
//       (c) =>
//         c.title.toLowerCase().includes(q) ||
//         c.topics.some((t) => t.title.toLowerCase().includes(q))
//     );
//   }, [query, courses]);

//   const getProgress = (course) => {
//     let total = 0;
//     let completed = 0;
//     course.topics.forEach((topic, ti) => {
//       topic.subtopics.forEach((_, si) => {
//         total++;
//         const key = `${course.id}::${ti}::${si}`;
//         if (progressMap[key]) completed++;
//       });
//     });
//     return total === 0 ? 0 : Math.round((completed / total) * 100);
//   };

//   // --- KEYBOARD NAVIGATION LOGIC ---
//   const handleKeyDown = (e) => {
//     // Only run if we are focused inside the list
//     if (!listRef.current) return;

//     const links = listRef.current.querySelectorAll("a"); // Get all links
//     const index = Array.from(links).indexOf(document.activeElement);

//     if (e.key === "ArrowDown") {
//       e.preventDefault();
//       const nextIndex = index + 1 < links.length ? index + 1 : 0; // Loop to top
//       links[nextIndex]?.focus();
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       const prevIndex = index - 1 >= 0 ? index - 1 : links.length - 1; // Loop to bottom
//       links[prevIndex]?.focus();
//     }
//     // 'Enter' key is handled natively by the <Link> component once focused
//   };

//   return (
//     <aside
//       className="glass-panel p-4 rounded-xl flex-1 flex flex-col overflow-hidden"
//       aria-label="Course Selection"
//     >
//       <div className="mb-4" role="search">
//         <SearchBar
//           value={query}
//           onChange={setQuery}
//           aria-label="Filter courses"
//         />
//       </div>

//       <nav aria-label="Courses list" className="flex-1 overflow-hidden">
//         {/* Attach the KeyDown handler here */}
//         <ul
//           ref={listRef}
//           onKeyDown={handleKeyDown}
//           className="space-y-3 overflow-y-auto custom-scrollbar pr-2 h-full"
//         >
//           {filtered.map((c) => {
//             const isActive = location.search.includes(`course=${c.id}`);
//             const percent = getProgress(c);

//             return (
//               <li key={c.id}>
//                 <Link
//                   to={`/?course=${c.id}`}
//                   aria-current={isActive ? "page" : undefined}
//                   className={`group block p-3 rounded-lg border transition-all duration-200 relative overflow-hidden focus:outline-none ${
//                     isActive
//                       ? "bg-[#1A73E8]/10 border-[#1A73E8]/50 shadow-[inset_0_0_10px_rgba(26,115,232,0.1)]"
//                       : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
//                   }`}
//                 >
//                   <div className="relative z-10">
//                     <div className="flex justify-between items-start mb-1">
//                       <div
//                         className={`font-medium text-sm ${
//                           isActive
//                             ? "text-[#1A73E8]"
//                             : "text-slate-200 group-hover:text-white"
//                         }`}
//                       >
//                         {c.title}
//                       </div>
//                       {percent > 0 && (
//                         <span
//                           className={`text-[10px] font-bold ${
//                             isActive ? "text-[#1A73E8]" : "text-slate-500"
//                           }`}
//                           aria-label={`${percent}% completed`}
//                         >
//                           {percent}%
//                         </span>
//                       )}
//                     </div>
//                     <div className="text-xs text-slate-500 truncate group-hover:text-slate-400 mb-2">
//                       {c.subtitle}
//                     </div>

//                     <div
//                       className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
//                       aria-hidden="true"
//                     >
//                       <div
//                         className={`h-full rounded-full transition-all duration-500 ${
//                           isActive ? "bg-[#1A73E8]" : "bg-slate-600"
//                         }`}
//                         style={{ width: `${percent}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </aside>
//   );
// }
import React, { useState, useMemo, useRef } from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ courses, progressMap = {} }) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.topics.some((t) => t.title.toLowerCase().includes(q))
    );
  }, [query, courses]);

  const getProgress = (course) => {
    let total = 0;
    let completed = 0;
    course.topics.forEach((topic, ti) => {
      topic.subtopics.forEach((_, si) => {
        total++;
        const key = `${course.id}::${ti}::${si}`;
        if (progressMap[key]) completed++;
      });
    });
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  // --- KEYBOARD NAVIGATION LOGIC ---
  const handleKeyDown = (e) => {
    if (!listRef.current) return;

    const links = listRef.current.querySelectorAll("a");
    const index = Array.from(links).indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index + 1 < links.length ? index + 1 : 0;
      links[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index - 1 >= 0 ? index - 1 : links.length - 1;
      links[prevIndex]?.focus();
    }
    // NEW: Drill down into Column 2
    else if (e.key === "ArrowRight") {
      e.preventDefault();
      // Look for the Topic List in Column 2 by ID
      const topicList = document.getElementById("topic-list-nav");
      const firstTopic = topicList?.querySelector("a");
      if (firstTopic) firstTopic.focus();
    }
  };

  return (
    <aside
      className="glass-panel p-4 rounded-xl flex-1 flex flex-col overflow-hidden"
      aria-label="Course Selection"
    >
      <div className="mb-4" role="search">
        <SearchBar
          value={query}
          onChange={setQuery}
          aria-label="Filter courses"
        />
      </div>

      <nav aria-label="Courses list" className="flex-1 overflow-hidden">
        <ul
          ref={listRef}
          onKeyDown={handleKeyDown}
          className="space-y-3 overflow-y-auto custom-scrollbar pr-2 h-full"
        >
          {filtered.map((c) => {
            const isActive = location.search.includes(`course=${c.id}`);
            const percent = getProgress(c);

            return (
              <li key={c.id}>
                <Link
                  to={`/?course=${c.id}`}
                  aria-current={isActive ? "page" : undefined}
                  // ID helps us find this link later when coming back from Column 2
                  id={isActive ? "active-course-link" : undefined}
                  className={`group block p-3 rounded-lg border transition-all duration-200 relative overflow-hidden focus:outline-none ${
                    isActive
                      ? "bg-[#1A73E8]/10 border-[#1A73E8]/50 shadow-[inset_0_0_10px_rgba(26,115,232,0.1)]"
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-1">
                      <div
                        className={`font-medium text-sm ${
                          isActive
                            ? "text-[#1A73E8]"
                            : "text-slate-200 group-hover:text-white"
                        }`}
                      >
                        {c.title}
                      </div>
                      {percent > 0 && (
                        <span
                          className={`text-[10px] font-bold ${
                            isActive ? "text-[#1A73E8]" : "text-slate-500"
                          }`}
                          aria-label={`${percent}% completed`}
                        >
                          {percent}%
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 truncate group-hover:text-slate-400 mb-2">
                      {c.subtitle}
                    </div>

                    <div
                      className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                      aria-hidden="true"
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isActive ? "bg-[#1A73E8]" : "bg-slate-600"
                        }`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
