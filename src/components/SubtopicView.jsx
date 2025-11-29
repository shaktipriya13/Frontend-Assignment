// import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import rehypeHighlight from "rehype-highlight";
// import ProgressCheckbox from "./ProgressCheckbox";
// import "highlight.js/styles/atom-one-dark.css";

// export default function SubtopicView({
//   course,
//   topicIndex,
//   subIndex,
//   progressMap,
//   setProgressMap,
// }) {
//   const topic = course.topics[topicIndex];
//   const sub = topic?.subtopics?.[subIndex];

//   if (!sub)
//     return (
//       <div className="flex flex-col items-center justify-center h-full text-slate-500 p-10 text-center">
//         <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-2xl">
//           👋
//         </div>
//         <h3 className="text-lg font-medium text-slate-300">
//           Welcome to {course.title}
//         </h3>
//         <p className="mt-2 text-sm max-w-xs">
//           Select a topic from the curriculum on the left to begin learning.
//         </p>
//       </div>
//     );

//   const key = `${course.id}::${topicIndex}::${subIndex}`;

//   return (
//     <div className="animate-fade-in pb-20">
//       {/* Header Area */}
//       <div className="bg-gradient-to-b from-[#1A73E8]/10 to-transparent p-8 pb-4">
//         <div className="flex justify-between items-start gap-4">
//           <div>
//             <span className="text-[#1A73E8] text-xs font-bold tracking-widest uppercase mb-2 block">
//               Module {topicIndex + 1} • Unit {subIndex + 1}
//             </span>
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
//               {sub.title}
//             </h1>
//           </div>

//           <div className="shrink-0 bg-black/40 backdrop-blur border border-white/10 p-2 rounded-lg">
//             <ProgressCheckbox
//               checked={!!progressMap[key]}
//               onChange={(v) => setProgressMap((p) => ({ ...p, [key]: v }))}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="px-8 py-6 max-w-4xl mx-auto">
//         <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-[#1A73E8] prose-img:rounded-xl prose-code:text-[#1A73E8]">
//           <ReactMarkdown
//             remarkPlugins={[remarkGfm]}
//             rehypePlugins={[rehypeRaw, rehypeHighlight]}
//           >
//             {sub.content}
//           </ReactMarkdown>
//         </article>
//       </div>

//       {/* Footer Navigation (Placeholder for Next/Prev functionality if you added it) */}
//       <div className="px-8 mt-10 pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
//         End of unit. Mark as completed above.
//       </div>
//     </div>
//   );
// }

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import ProgressCheckbox from "./ProgressCheckbox";

// Custom Renderer for Blockquotes to support GitHub-style alerts
// Syntax: > [!NOTE] or > [!WARNING] or > [!TIP]
const CustomBlockquote = ({ children }) => {
  // Extract text from children to check for alert patterns
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  let text = "";

  // Drill down to find the text string inside the paragraph
  if (firstChild && firstChild.props && firstChild.props.children) {
    if (typeof firstChild.props.children === "string") {
      text = firstChild.props.children;
    } else if (Array.isArray(firstChild.props.children)) {
      text = firstChild.props.children[0];
    }
  }

  // Check for alert types
  if (typeof text === "string") {
    if (text.startsWith("[!NOTE]")) {
      return (
        <div className="prose blockquote callout callout-note">
          <span className="callout-title">ℹ️ Note</span>
          {childrenArray.map((child, i) => {
            // Remove the [!NOTE] text from the first paragraph
            if (i === 0 && React.isValidElement(child)) {
              return React.cloneElement(child, {}, text.replace("[!NOTE]", ""));
            }
            return child;
          })}
        </div>
      );
    }
    if (text.startsWith("[!WARNING]")) {
      return (
        <div className="prose blockquote callout callout-warn">
          <span className="callout-title">⚠️ Warning</span>
          {childrenArray.map((child, i) => {
            if (i === 0 && React.isValidElement(child)) {
              return React.cloneElement(
                child,
                {},
                text.replace("[!WARNING]", "")
              );
            }
            return child;
          })}
        </div>
      );
    }
    if (text.startsWith("[!TIP]")) {
      return (
        <div className="prose blockquote callout callout-tip">
          <span className="callout-title">💡 Tip</span>
          {childrenArray.map((child, i) => {
            if (i === 0 && React.isValidElement(child)) {
              return React.cloneElement(child, {}, text.replace("[!TIP]", ""));
            }
            return child;
          })}
        </div>
      );
    }
  }

  // Default blockquote
  return <blockquote>{children}</blockquote>;
};

export default function SubtopicView({
  course,
  topicIndex,
  subIndex,
  progressMap,
  setProgressMap,
}) {
  const topic = course.topics[topicIndex];
  const sub = topic?.subtopics?.[subIndex];

  if (!sub)
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-500 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-2xl">
          👋
        </div>
        <h3 className="text-lg font-medium text-slate-300">
          Welcome to {course.title}
        </h3>
        <p className="mt-2 text-sm max-w-xs">
          Select a topic from the curriculum on the left to begin learning.
        </p>
      </div>
    );

  const key = `${course.id}::${topicIndex}::${subIndex}`;

  return (
    <div className="animate-fade-in pb-20">
      {/* Header Area */}
      <div className="bg-gradient-to-b from-[#1A73E8]/10 to-transparent p-8 pb-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[#1A73E8] text-xs font-bold tracking-widest uppercase mb-2 block">
              Module {topicIndex + 1} • Unit {subIndex + 1}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              {sub.title}
            </h1>
          </div>

          <div className="shrink-0 bg-black/40 backdrop-blur border border-white/10 p-2 rounded-lg">
            <ProgressCheckbox
              checked={!!progressMap[key]}
              onChange={(v) => setProgressMap((p) => ({ ...p, [key]: v }))}
            />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-8 py-6 max-w-4xl mx-auto">
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-[#1A73E8] prose-img:rounded-xl prose-code:text-[#1A73E8]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              blockquote: CustomBlockquote,
            }}
          >
            {sub.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Footer Navigation */}
      <div className="px-8 mt-10 pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
        End of unit. Mark as completed above.
      </div>
    </div>
  );
}
