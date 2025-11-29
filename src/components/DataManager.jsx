import React, { useRef } from "react";
import { saveAs } from "file-saver";

export default function DataManager({ courses, onImport, onReset }) {
  const ref = useRef();

  function exportJSON() {
    const blob = new Blob([JSON.stringify(courses, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "courses-export.json");
  }

  function importFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = () => {
      try {
        onImport(JSON.parse(reader.result));
      } catch {
        alert("Invalid JSON");
      }
    };

    reader.readAsText(file);
  }

  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <button
        onClick={exportJSON}
        className="col-span-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-slate-300 transition-colors"
      >
        Export Data
      </button>

      <label className="col-span-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-slate-300 cursor-pointer text-center transition-colors">
        Import JSON
        <input type="file" className="hidden" ref={ref} onChange={importFile} />
      </label>

      <button
        onClick={onReset}
        className="col-span-2 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent rounded transition-colors"
      >
        Reset to Defaults
      </button>
    </div>
  );
}
