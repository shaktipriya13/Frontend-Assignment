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
export default function SubtopicView({
  course,
  topicIndex,
  subIndex,
  progressMap,
  setProgressMap,
}) {
  const topic = course.topics[topicIndex];
  const sub = topic?.subtopics?.[subIndex];

  // 1. NEW: Detailed Course Landing Page (Matches Assignment Data Model)
  if (!sub) {
    return (
      <div className="animate-fade-in h-full overflow-y-auto custom-scrollbar">
        {/* Cover Image */}
        {course.coverImageUrl ? (
          <div className="w-full h-48 md:h-64 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
            <img
              src={course.coverImageUrl}
              alt={course.title}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ) : (
          <div className="w-full h-32 bg-gradient-to-r from-[#1A73E8]/20 to-purple-500/20 border-b border-white/5"></div>
        )}

        <div className="p-8 -mt-20 relative z-20">
          <span
            className={`inline-block px-3 py-1 rounded text-[10px] font-bold tracking-wider mb-3 border ${
              course.difficulty === "BEGINNER"
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : course.difficulty === "INTERMEDIATE"
                ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            {course.difficulty || "ALL LEVELS"}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {course.title}
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {course.description}
          </p>

          {/* Learning Objectives Section */}
          {course.learningObjectives && (
            <div className="glass-panel p-6 rounded-xl border border-[#1A73E8]/20 bg-[#1A73E8]/5">
              <h3 className="text-[#1A73E8] font-bold uppercase tracking-widest text-xs mb-4">
                What you will learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-[#1A73E8]">✓</span>
                    <span className="text-slate-300 text-sm">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-10 border-t border-white/5 text-slate-500 text-sm">
            Select a topic from the sidebar to start learning.
          </div>
        </div>
      </div>
    );
  }

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
