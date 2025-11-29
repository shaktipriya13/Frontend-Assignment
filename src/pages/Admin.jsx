import React from "react";
import EmptyState from "../components/EmptyState";
import usersRaw from "../data/users.json";

export default function Admin() {
  const users = Array.isArray(usersRaw) ? usersRaw : usersRaw.users || [];

  if (users.length === 0)
    return <EmptyState title="No Users" message="No users available" />;

  return (
    <div className="glass-panel p-8 rounded-2xl max-w-5xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">User Administration</h1>
        <span className="bg-[#1A73E8]/20 text-[#1A73E8] px-3 py-1 rounded-full text-xs font-mono">
          {users.length} Active Users
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-white/5 text-slate-400">
            <tr>
              <th className="p-4 rounded-tl-lg">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4 rounded-tr-lg">Role</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-slate-500 font-mono">#{u.id}</td>
                <td className="p-4 font-medium text-white">{u.name}</td>
                <td className="p-4 text-slate-400">{u.email}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs border ${
                      u.role === "teacher"
                        ? "border-purple-500/30 bg-purple-500/10 text-purple-400"
                        : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
