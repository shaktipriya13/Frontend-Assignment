import React, { useState } from "react";

export default function CourseForm({ initial = null, onSave, onCancel }) {

  const [course, setCourse] = useState({
    id: initial?.id || Date.now(),
    title: initial?.title || "",
    subtitle: initial?.subtitle || "",
    description: initial?.description || "",
    difficulty: initial?.difficulty || "BEGINNER",
    topics: initial?.topics || [],
  });

  function addTopic() {
    setCourse((prev) => ({
      ...prev,
      topics: [
        ...(prev.topics || []),
        {
          title: "New Topic",
          description: "",
          orderIndex: (prev.topics?.length || 0) + 1,
          subtopics: [{ title: "New Subtopic", content: "", orderIndex: 1 }],
        },
      ],
    }));
  }

  function updateTopic(idx, patch) {
    const topics = course.topics.map((t, i) =>
      i === idx ? { ...t, ...patch } : t
    );
    setCourse((prev) => ({ ...prev, topics }));
  }

  function addSubtopic(tIdx) {
    const topics = course.topics.map((t, i) =>
      i === tIdx
        ? {
            ...t,
            subtopics: [
              ...(t.subtopics || []),
              {
                title: "New Subtopic",
                content: "",
                orderIndex: (t.subtopics?.length || 0) + 1,
              },
            ],
          }
        : t
    );
    setCourse((prev) => ({ ...prev, topics }));
  }

  function updateSubtopic(tIdx, sIdx, patch) {
    const topics = course.topics.map((t, i) => {
      if (i !== tIdx) return t;
      const subtopics = t.subtopics.map((s, j) =>
        j === sIdx ? { ...s, ...patch } : s
      );
      return { ...t, subtopics };
    });
    setCourse((prev) => ({ ...prev, topics }));
  }

  // --- UI COMPONENTS ---

  const InputStyles =
    "w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-white focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none transition-all placeholder-slate-500 text-sm";
  const LabelStyles =
    "block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider";

  return (
    <div className="glass-panel p-6 rounded-xl animate-fade-in space-y-8 max-w-5xl mx-auto">
      {/* HEADER SECTION */}
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Course Details</h2>
          <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
            Editing Mode
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className={LabelStyles}>Course Title</label>
            <input
              className={InputStyles}
              placeholder="e.g. Advanced Web Development"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
            />
          </div>
          <div>
            <label className={LabelStyles}>Difficulty</label>
            <select
              className={InputStyles}
              value={course.difficulty}
              onChange={(e) =>
                setCourse({ ...course, difficulty: e.target.value })
              }
            >
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className={LabelStyles}>Subtitle</label>
          <input
            className={InputStyles}
            placeholder="e.g. Master the fundamentals in 30 days"
            value={course.subtitle}
            onChange={(e) => setCourse({ ...course, subtitle: e.target.value })}
          />
        </div>

        <div>
          <label className={LabelStyles}>Short Description</label>
          <textarea
            className={`${InputStyles} resize-none h-24`}
            placeholder="Brief overview of what students will learn..."
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
      </div>

      {/* TOPICS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg text-white">Curriculum & Content</h4>
          <button
            onClick={addTopic}
            className="text-xs font-medium text-[#1A73E8] bg-[#1A73E8]/10 hover:bg-[#1A73E8]/20 px-3 py-1.5 rounded-full transition-colors border border-[#1A73E8]/20"
          >
            + Add New Module
          </button>
        </div>

        <div className="space-y-6">
          {(course.topics || []).map((t, ti) => (
            <div
              key={ti}
              className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 transition-all hover:border-white/20"
            >
              {/* Topic Header */}
              <div className="mb-6">
                <label className={`${LabelStyles} text-[#1A73E8]`}>
                  Module {ti + 1} Title
                </label>
                <input
                  className={`${InputStyles} text-lg font-semibold bg-black/60`}
                  value={t.title}
                  placeholder="Module Title"
                  onChange={(e) => updateTopic(ti, { title: e.target.value })}
                />
              </div>

              {/* Subtopics List */}
              <div className="space-y-4 pl-0 md:pl-4 border-l-0 md:border-l-2 border-white/5 md:ml-2">
                {(t.subtopics || []).map((s, si) => (
                  <div
                    key={si}
                    className="bg-black/20 rounded-lg p-4 border border-white/5 relative group"
                  >
                    <div className="absolute -left-[25px] top-6 w-4 h-[2px] bg-white/10 hidden md:block"></div>

                    <div className="grid gap-3">
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 block">
                          Lesson Title
                        </label>
                        <input
                          className={InputStyles}
                          value={s.title}
                          placeholder="Lesson Title"
                          onChange={(e) =>
                            updateSubtopic(ti, si, { title: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 block">
                          Content (Markdown)
                        </label>
                        <textarea
                          className={`${InputStyles} font-mono text-xs h-32`}
                          value={s.content}
                          placeholder="# Lesson Content..."
                          onChange={(e) =>
                            updateSubtopic(ti, si, { content: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => addSubtopic(ti)}
                  className="w-full py-2 border border-dashed border-white/20 rounded text-sm text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <span>+</span> Add Lesson to Module
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Topics */}
        {course.topics.length === 0 && (
          <div className="text-center py-10 border-2 border-dashed border-white/10 rounded-xl">
            <p className="text-slate-500 text-sm">No modules added yet.</p>
            <button
              onClick={addTopic}
              className="text-[#1A73E8] hover:underline text-sm mt-2"
            >
              Start by adding a module
            </button>
          </div>
        )}
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex gap-3 pt-6 border-t border-white/10 sticky bottom-0 bg-[#050505]/95 backdrop-blur py-4 z-10 -mx-6 px-6 rounded-b-xl">
        <button
          onClick={() => onSave(course)}
          className="flex-1 bg-[#1A73E8] hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg shadow-[0_0_15px_rgba(26,115,232,0.3)] transition-all active:scale-95"
        >
          Save Changes
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-colors border border-white/10"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
