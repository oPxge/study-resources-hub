import React from "react";

export default function Toolbar({ query, setQuery, category, setCategory, categories }) {
  return (
    <div className="card mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      
      <input
        placeholder="Search resources…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input md:w-96"
      />

      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input md:w-52"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

    </div>
  );
}
