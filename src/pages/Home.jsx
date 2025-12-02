import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopicList from "../components/TopicList";
import SubtopicView from "../components/SubtopicView";
import Breadcrumbs from "../components/Breadcrumbs";
import DataManager from "../components/DataManager";
import CourseForm from "../components/CourseForm";
import useLocalStorage from "../hooks/useLocalStorage";
import useCoursesLocal from "../hooks/useCoursesLocal";
import { useSearchParams, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

export default function Home() {
  const { courses, resetCourses, importCourses, addOrUpdateCourse } =
    useCoursesLocal();
  const [progressMap, setProgressMap] = useLocalStorage("progress_v1", {});
  const [editingCourse, setEditingCourse] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const courseId = Number(params.get("course")) || courses[0]?.id;
  const topicIndex = Number(params.get("topic") ?? -1);
  const subIndex = Number(params.get("sub") ?? -1);

  const course = useMemo(
    () => courses.find((c) => c.id === courseId) || courses[0],
    [courseId, courses]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-100px)]">
      {/* LEFT SIDEBAR - COURSE SELECTION */}
      <div className="lg:col-span-3 flex flex-col gap-4 h-full">
        <Sidebar courses={courses} progressMap={progressMap} />

        <div className="glass-panel p-4 rounded-xl flex flex-col gap-3">
          <DataManager
            courses={courses}
            onImport={(json) => {
              importCourses(json);
              navigate("/");
            }}
            onReset={resetCourses}
          />
          <button
            onClick={() => setEditingCourse({})}
            className="w-full py-2.5 rounded-lg bg-[#1A73E8] hover:bg-blue-600 text-white font-medium shadow-[0_4px_12px_rgba(26,115,232,0.3)] transition-all active:scale-95"
          >
            + Create New Course
          </button>
        </div>
      </div>

      {/* MIDDLE - TOPICS LIST */}
      {/* <div className="lg:col-span-3 h-full overflow-hidden"> */}
      <div className="lg:col-span-3 h-96 lg:h-full overflow-hidden">
        <div className="glass-panel rounded-xl h-full flex flex-col">
          <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-sm">
            <h2 className="font-semibold text-white/90">Curriculum</h2>
          </div>
          <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
            <TopicList
              course={course}
              baseUrl={`/?course=${course.id}`}
              progressMap={progressMap}
            />
          </div>
        </div>
      </div>

      {/* RIGHT - CONTENT VIEW */}
      <div className="lg:col-span-6 h-full overflow-hidden">
        {!editingCourse ? (
          <div className="glass-panel rounded-xl h-full overflow-hidden relative flex flex-col">
            <div className="p-6 border-b border-white/5 bg-black/20">
              <Breadcrumbs
                course={course}
                topicIndex={topicIndex}
                subIndex={subIndex}
              />
            </div>
            <div className="overflow-y-auto custom-scrollbar p-0 flex-1">
              <SubtopicView
                course={course}
                topicIndex={topicIndex}
                subIndex={subIndex}
                progressMap={progressMap}
                setProgressMap={setProgressMap}
              />
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto custom-scrollbar p-1">
            <CourseForm
              initial={editingCourse}
              //   onSave={(c) => {
              //     addOrUpdateCourse(c);
              //     setEditingCourse(null);
              //   }}
              onSave={(c) => {
                addOrUpdateCourse(c);
                setEditingCourse(null);
                setToastMsg("Course saved successfully!");
              }}
              onCancel={() => setEditingCourse(null)}
            />
          </div>
        )}
      </div>
      {toastMsg && (
        <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
      )}
    </div>
  );
}
