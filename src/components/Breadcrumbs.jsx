import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ course, topicIndex, subIndex }) {
  const topic = course?.topics?.[topicIndex];
  const sub = topic?.subtopics?.[subIndex];

  // Helper for separator
  const Separator = () => <span className="mx-2 text-slate-600">›</span>;

  return (
    <div className="flex items-center text-xs font-medium text-slate-400 overflow-hidden whitespace-nowrap">
      <Link
        to="/"
        className="hover:text-[#1A73E8] hover:underline transition-colors shrink-0"
      >
        Home
      </Link>

      <Separator />

      <Link
        to={`/?course=${course.id}`}
        className="hover:text-[#1A73E8] hover:underline transition-colors truncate max-w-[150px]"
        title={course.title}
      >
        {course.title}
      </Link>

      {topic && (
        <>
          <Separator />
          <span className="truncate max-w-[150px]" title={topic.title}>
            {topic.title}
          </span>
        </>
      )}

      {sub && (
        <>
          <Separator />
          <span
            className="text-[#1A73E8] truncate max-w-[200px]"
            title={sub.title}
          >
            {sub.title}
          </span>
        </>
      )}
    </div>
  );
}
