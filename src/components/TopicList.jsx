// // // import React, { useMemo } from "react";
// // // import { Link, useLocation } from "react-router-dom";

// // // export default function TopicList({ course, baseUrl, progressMap }) {
// // //   const location = useLocation();

// // //   // Calculate stats for this specific course
// // //   const stats = useMemo(() => {
// // //     let total = 0;
// // //     let completed = 0;
// // //     course.topics.forEach((topic, ti) => {
// // //       topic.subtopics.forEach((_, si) => {
// // //         total++;
// // //         const key = `${course.id}::${ti}::${si}`;
// // //         if (progressMap[key]) completed++;
// // //       });
// // //     });
// // //     const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
// // //     return { total, completed, percent };
// // //   }, [course, progressMap]);

// // //   if (!course.topics || course.topics.length === 0) {
// // //     return (
// // //       <div className="text-slate-500 text-sm italic">No topics found.</div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       {/* NEW: Course Progress Header */}
// // //       <div className="bg-gradient-to-r from-[#1A73E8]/20 to-transparent p-4 rounded-lg border border-[#1A73E8]/20 mb-6">
// // //         <div className="flex justify-between text-xs font-semibold text-[#1A73E8] mb-2 uppercase tracking-wider">
// // //           <span>Course Progress</span>
// // //           <span>{stats.percent}% Completed</span>
// // //         </div>
// // //         <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
// // //           <div
// // //             className="h-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8] transition-all duration-700 ease-out"
// // //             style={{ width: `${stats.percent}%` }}
// // //           ></div>
// // //         </div>
// // //         <div className="text-right text-[10px] text-slate-400 mt-1">
// // //           {stats.completed} / {stats.total} lessons
// // //         </div>
// // //       </div>

// // //       {course.topics.map((topic, ti) => (
// // //         <div key={ti} className="relative">
// // //           <div className="flex items-center justify-between mb-3 sticky top-0 bg-[#0b0f15]/95 backdrop-blur z-10 py-1">
// // //             <h3 className="font-bold text-slate-200 text-sm uppercase tracking-wider">
// // //               {topic.title}
// // //             </h3>
// // //             <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/5">
// // //               {topic.subtopics.length} items
// // //             </span>
// // //           </div>

// // //           <div className="space-y-1 ml-1 border-l border-white/10 pl-3">
// // //             {topic.subtopics.map((sub, si) => {
// // //               const key = `${course.id}::${ti}::${si}`;
// // //               const done = progressMap[key];
// // //               const isActive =
// // //                 location.search.includes(`topic=${ti}`) &&
// // //                 location.search.includes(`sub=${si}`);

// // //               return (
// // //                 <Link
// // //                   key={si}
// // //                   to={`${baseUrl}&topic=${ti}&sub=${si}`}
// // //                   className={`block text-sm py-2 px-3 rounded-md transition-colors flex items-center justify-between group ${
// // //                     isActive
// // //                       ? "bg-[#1A73E8]/10 text-[#1A73E8] border border-[#1A73E8]/20"
// // //                       : done
// // //                       ? "text-slate-500 hover:bg-white/5"
// // //                       : "text-slate-300 hover:bg-[#1A73E8]/10 hover:text-[#1A73E8]"
// // //                   }`}
// // //                 >
// // //                   <span className={`${done ? "opacity-80" : ""}`}>
// // //                     {sub.title}
// // //                   </span>

// // //                   {done && <span className="text-[#1A73E8] text-xs">✓</span>}
// // //                 </Link>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // import React, { useMemo } from "react";
// // import { Link, useLocation } from "react-router-dom";

// // export default function TopicList({ course, baseUrl, progressMap }) {
// //   const location = useLocation();

// //   const stats = useMemo(() => {
// //     let total = 0;
// //     let completed = 0;
// //     course.topics.forEach((topic, ti) => {
// //       topic.subtopics.forEach((_, si) => {
// //         total++;
// //         const key = `${course.id}::${ti}::${si}`;
// //         if (progressMap[key]) completed++;
// //       });
// //     });
// //     const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
// //     return { total, completed, percent };
// //   }, [course, progressMap]);

// //   if (!course.topics || course.topics.length === 0) {
// //     return (
// //       <div className="text-slate-500 text-sm italic">No topics found.</div>
// //     );
// //   }

// //   return (
// //     <nav className="relative" aria-label="Course Curriculum">
// //       {/* Progress Bar Header */}
// //       <div
// //         className="sticky top-0 z-40 bg-[#050505] -mt-4 pt-5 pb-6 -mx-4 px-4 shadow-xl shadow-black/80 border-b border-white/5"
// //         role="region"
// //         aria-label="Course Progress Summary"
// //       >
// //         <div className="bg-gradient-to-r from-[#1A73E8]/20 to-transparent p-4 rounded-lg border border-[#1A73E8]/20 bg-[#0b1020]">
// //           <div className="flex justify-between text-xs font-semibold text-[#1A73E8] mb-2 uppercase tracking-wider">
// //             <span>Course Progress</span>
// //             <span>{stats.percent}% Completed</span>
// //           </div>
// //           <div
// //             className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/5"
// //             aria-hidden="true"
// //           >
// //             <div
// //               className="h-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8] transition-all duration-700 ease-out"
// //               style={{ width: `${stats.percent}%` }}
// //             ></div>
// //           </div>
// //           <div className="text-right text-[10px] text-slate-400 mt-1">
// //             {stats.completed} / {stats.total} lessons
// //           </div>
// //         </div>
// //       </div>

// //       <ul className="space-y-6 mt-4">
// //         {course.topics.map((topic, ti) => (
// //           <li key={ti} className="relative">
// //             <div className="flex items-center justify-between mb-3 py-1 border-b border-white/5">
// //               <h3
// //                 className="font-bold text-slate-200 text-sm uppercase tracking-wider"
// //                 id={`topic-header-${ti}`}
// //               >
// //                 {topic.title}
// //               </h3>
// //               <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/5">
// //                 {topic.subtopics.length} items
// //               </span>
// //             </div>

// //             <ul
// //               className="space-y-1 ml-1 border-l border-white/10 pl-3"
// //               aria-labelledby={`topic-header-${ti}`}
// //             >
// //               {topic.subtopics.map((sub, si) => {
// //                 const key = `${course.id}::${ti}::${si}`;
// //                 const done = progressMap[key];
// //                 const isActive =
// //                   location.search.includes(`topic=${ti}`) &&
// //                   location.search.includes(`sub=${si}`);

// //                 return (
// //                   <li key={si}>
// //                     <Link
// //                       to={`${baseUrl}&topic=${ti}&sub=${si}`}
// //                       aria-current={isActive ? "page" : undefined}
// //                       className={`block text-sm py-2 px-3 rounded-md transition-colors flex items-center justify-between group focus:outline-none ${
// //                         isActive
// //                           ? "bg-[#1A73E8]/10 text-[#1A73E8] border border-[#1A73E8]/20"
// //                           : done
// //                           ? "text-slate-500 hover:bg-white/5"
// //                           : "text-slate-300 hover:bg-[#1A73E8]/10 hover:text-[#1A73E8]"
// //                       }`}
// //                     >
// //                       <span className={`${done ? "opacity-80" : ""}`}>
// //                         {sub.title}
// //                       </span>

// //                       {done && (
// //                         <span
// //                           className="text-[#1A73E8] text-xs"
// //                           aria-label="Completed"
// //                         >
// //                           ✓
// //                         </span>
// //                       )}
// //                     </Link>
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // }
// import React, { useMemo, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function TopicList({ course, baseUrl, progressMap }) {
//   const location = useLocation();
//   const listRef = useRef(null);

//   const stats = useMemo(() => {
//     let total = 0;
//     let completed = 0;
//     course.topics.forEach((topic, ti) => {
//       topic.subtopics.forEach((_, si) => {
//         total++;
//         const key = `${course.id}::${ti}::${si}`;
//         if (progressMap[key]) completed++;
//       });
//     });
//     const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
//     return { total, completed, percent };
//   }, [course, progressMap]);

//   // --- KEYBOARD NAVIGATION LOGIC ---
//   const handleKeyDown = (e) => {
//     if (!listRef.current) return;

//     // Select all links inside this specific list
//     const links = listRef.current.querySelectorAll("a");
//     const index = Array.from(links).indexOf(document.activeElement);

//     if (e.key === "ArrowDown") {
//       e.preventDefault();
//       const nextIndex = index + 1 < links.length ? index + 1 : 0;
//       links[nextIndex]?.focus();
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       const prevIndex = index - 1 >= 0 ? index - 1 : links.length - 1;
//       links[prevIndex]?.focus();
//     }
//   };

//   if (!course.topics || course.topics.length === 0) {
//     return (
//       <div className="text-slate-500 text-sm italic">No topics found.</div>
//     );
//   }

//   return (
//     <nav className="relative" aria-label="Course Curriculum">
//       {/* Header (same as before) */}
//       <div
//         className="sticky top-0 z-40 bg-[#050505] -mt-4 pt-5 pb-6 -mx-4 px-4 shadow-xl shadow-black/80 border-b border-white/5"
//         role="region"
//         aria-label="Course Progress Summary"
//       >
//         <div className="bg-gradient-to-r from-[#1A73E8]/20 to-transparent p-4 rounded-lg border border-[#1A73E8]/20 bg-[#0b1020]">
//           <div className="flex justify-between text-xs font-semibold text-[#1A73E8] mb-2 uppercase tracking-wider">
//             <span>Course Progress</span>
//             <span>{stats.percent}% Completed</span>
//           </div>
//           <div
//             className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/5"
//             aria-hidden="true"
//           >
//             <div
//               className="h-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8] transition-all duration-700 ease-out"
//               style={{ width: `${stats.percent}%` }}
//             ></div>
//           </div>
//           <div className="text-right text-[10px] text-slate-400 mt-1">
//             {stats.completed} / {stats.total} lessons
//           </div>
//         </div>
//       </div>

//       {/* Main List with Keyboard Listener */}
//       <ul
//         ref={listRef}
//         onKeyDown={handleKeyDown}
//         className="space-y-6 mt-4 outline-none"
//         tabIndex={-1} // allows the UL to catch focus if needed, but mainly for bubbling
//       >
//         {course.topics.map((topic, ti) => (
//           <li key={ti} className="relative">
//             <div className="flex items-center justify-between mb-3 py-1 border-b border-white/5">
//               <h3
//                 className="font-bold text-slate-200 text-sm uppercase tracking-wider"
//                 id={`topic-header-${ti}`}
//               >
//                 {topic.title}
//               </h3>
//               <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/5">
//                 {topic.subtopics.length} items
//               </span>
//             </div>

//             <ul
//               className="space-y-1 ml-1 border-l border-white/10 pl-3"
//               aria-labelledby={`topic-header-${ti}`}
//             >
//               {topic.subtopics.map((sub, si) => {
//                 const key = `${course.id}::${ti}::${si}`;
//                 const done = progressMap[key];
//                 const isActive =
//                   location.search.includes(`topic=${ti}`) &&
//                   location.search.includes(`sub=${si}`);

//                 return (
//                   <li key={si}>
//                     <Link
//                       to={`${baseUrl}&topic=${ti}&sub=${si}`}
//                       aria-current={isActive ? "page" : undefined}
//                       className={`block text-sm py-2 px-3 rounded-md transition-colors flex items-center justify-between group focus:outline-none ${
//                         isActive
//                           ? "bg-[#1A73E8]/10 text-[#1A73E8] border border-[#1A73E8]/20"
//                           : done
//                           ? "text-slate-500 hover:bg-white/5"
//                           : "text-slate-300 hover:bg-[#1A73E8]/10 hover:text-[#1A73E8]"
//                       }`}
//                     >
//                       <span className={`${done ? "opacity-80" : ""}`}>
//                         {sub.title}
//                       </span>

//                       {done && (
//                         <span
//                           className="text-[#1A73E8] text-xs"
//                           aria-label="Completed"
//                         >
//                           ✓
//                         </span>
//                       )}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
import React, { useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopicList({ course, baseUrl, progressMap }) {
  const location = useLocation();
  const listRef = useRef(null);

  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;
    course.topics.forEach((topic, ti) => {
      topic.subtopics.forEach((_, si) => {
        total++;
        const key = `${course.id}::${ti}::${si}`;
        if (progressMap[key]) completed++;
      });
    });
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, percent };
  }, [course, progressMap]);

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
    // NEW: Go back to Column 1 (Sidebar)
    else if (e.key === "ArrowLeft") {
      e.preventDefault();
      // Find the active course link in the sidebar
      const activeCourse = document.getElementById("active-course-link");
      if (activeCourse) activeCourse.focus();
    }
  };

  if (!course.topics || course.topics.length === 0) {
    return (
      <div className="text-slate-500 text-sm italic">No topics found.</div>
    );
  }

  return (
    // NEW: Added ID here for targeting
    <nav
      className="relative"
      aria-label="Course Curriculum"
      id="topic-list-nav"
    >
      {/* Header */}
      <div
        className="sticky top-0 z-40 bg-[#050505] -mt-4 pt-5 pb-6 -mx-4 px-4 shadow-xl shadow-black/80 border-b border-white/5"
        role="region"
        aria-label="Course Progress Summary"
      >
        <div className="bg-gradient-to-r from-[#1A73E8]/20 to-transparent p-4 rounded-lg border border-[#1A73E8]/20 bg-[#0b1020]">
          <div className="flex justify-between text-xs font-semibold text-[#1A73E8] mb-2 uppercase tracking-wider">
            <span>Course Progress</span>
            <span>{stats.percent}% Completed</span>
          </div>
          <div
            className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/5"
            aria-hidden="true"
          >
            <div
              className="h-full bg-[#1A73E8] shadow-[0_0_10px_#1A73E8] transition-all duration-700 ease-out"
              style={{ width: `${stats.percent}%` }}
            ></div>
          </div>
          <div className="text-right text-[10px] text-slate-400 mt-1">
            {stats.completed} / {stats.total} lessons
          </div>
        </div>
      </div>

      {/* Main List */}
      <ul
        ref={listRef}
        onKeyDown={handleKeyDown}
        className="space-y-6 mt-4 outline-none"
        tabIndex={-1}
      >
        {course.topics.map((topic, ti) => (
          <li key={ti} className="relative">
            <div className="flex items-center justify-between mb-3 py-1 border-b border-white/5">
              <h3
                className="font-bold text-slate-200 text-sm uppercase tracking-wider"
                id={`topic-header-${ti}`}
              >
                {topic.title}
              </h3>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/5">
                {topic.subtopics.length} items
              </span>
            </div>

            <ul
              className="space-y-1 ml-1 border-l border-white/10 pl-3"
              aria-labelledby={`topic-header-${ti}`}
            >
              {topic.subtopics.map((sub, si) => {
                const key = `${course.id}::${ti}::${si}`;
                const done = progressMap[key];
                const isActive =
                  location.search.includes(`topic=${ti}`) &&
                  location.search.includes(`sub=${si}`);

                return (
                  <li key={si}>
                    <Link
                      to={`${baseUrl}&topic=${ti}&sub=${si}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`block text-sm py-2 px-3 rounded-md transition-colors flex items-center justify-between group focus:outline-none ${
                        isActive
                          ? "bg-[#1A73E8]/10 text-[#1A73E8] border border-[#1A73E8]/20"
                          : done
                          ? "text-slate-500 hover:bg-white/5"
                          : "text-slate-300 hover:bg-[#1A73E8]/10 hover:text-[#1A73E8]"
                      }`}
                    >
                      <span className={`${done ? "opacity-80" : ""}`}>
                        {sub.title}
                      </span>

                      {done && (
                        <span
                          className="text-[#1A73E8] text-xs"
                          aria-label="Completed"
                        >
                          ✓
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
