export function ensureIds(raw) {
  const arr = Array.isArray(raw)
    ? raw
    : raw && Array.isArray(raw.courses)
    ? raw.courses
    : [];
  return arr.map((c, ci) => ({
    ...c,
    id: c.id ?? Date.now() + ci,
    topics: (c.topics || []).map((t, ti) => ({
      ...t,
      orderIndex: t.orderIndex ?? ti + 1,
      subtopics: (t.subtopics || []).map((s, si) => ({
        ...s,
        orderIndex: s.orderIndex ?? si + 1,
      })),
    })),
  }));
}
