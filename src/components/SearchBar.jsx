"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search blogs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
}