import coursesSeedRaw from "../data/courses.json";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { ensureIds } from "../utils/helpers";

// Manage courses with localStorage and seed fallback
export default function useCoursesLocal() {
  // Normalize the seed: ensureIds accepts either array or object
  const normalizedSeed = ensureIds(coursesSeedRaw);
  const [courses, setCourses] = useLocalStorage("courses_v1", normalizedSeed);

  useEffect(() => {
    if (!Array.isArray(courses)) {
      setCourses(normalizedSeed);
    }
  }, []); // only on mount

  function resetCourses() {
    setCourses(normalizedSeed);
  }

  function importCourses(newCoursesRaw) {
    setCourses(ensureIds(newCoursesRaw));
  }

  function exportCourses() {
    return courses;
  }

  function addOrUpdateCourse(course) {
    const fixed = ensureIds([course])[0];
    if (!course.id) {
      setCourses((prev) => [fixed, ...(Array.isArray(prev) ? prev : [])]);
      return;
    }
    setCourses((prev) =>
      Array.isArray(prev)
        ? prev.map((c) => (c.id === course.id ? fixed : c))
        : [fixed]
    );
  }

  function deleteCourse(id) {
    setCourses((prev) =>
      Array.isArray(prev) ? prev.filter((c) => c.id !== id) : []
    );
  }

  return {
    courses,
    setCourses,
    resetCourses,
    importCourses,
    exportCourses,
    addOrUpdateCourse,
    deleteCourse,
  };
}
