"use client";

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  const categories = [
    "All",
    "React",
    "Next.js",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Backend",
    "UI/UX",
    "DevOps",
  ];

  return (
    <div className="mb-10 space-y-5">
      <input
        type="text"
        placeholder="🔍 Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full transition font-medium ${
              category === item
                ? "bg-cyan-600 text-white"
                : "bg-gray-200 hover:bg-cyan-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}