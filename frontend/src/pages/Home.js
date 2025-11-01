import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE } from '../lib/api';

export default function Home() {
  const [resources, setResources] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  // ✅ Load resources on mount
  useEffect(() => {
    axios.get(`${API_BASE}/resources`)
      .then(res => setResources(res.data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Unique category list
  const categories = useMemo(() => {
    const set = new Set(resources.map(r => r.category).filter(Boolean));
    return [...set].sort();
  }, [resources]);

  // ✅ Filtering logic
  const filtered = useMemo(() => {
    let list = resources;

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(r =>
        (r.title || "").toLowerCase().includes(q) ||
        (r.description || "").toLowerCase().includes(q)
      );
    }

    if (category) {
      list = list.filter(r => r.category === category);
    }

    return list;
  }, [resources, query, category]);

  // ✅ Delete resource
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resource?")) return;
    await axios.delete(`${API_BASE}/resources/${id}`);
    setResources(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="container mx-auto px-4">

      {/* ✅ Warm, friendly Hero Section */}
      <div className="bg-blue-50 border border-blue-200 text-blue-900 p-6 rounded-xl shadow mb-10">
        <h2 className="text-2xl font-semibold">🎓 Welcome to Study Resources Hub</h2>
        <p className="mt-2 text-blue-800">
          A calm, organised place to store, search and manage all your study materials.
        </p>
      </div>

      {/* ✅ Search Bar */}
      <div className="mb-6">
        <input
          className="w-full md:w-96 p-3 border rounded-xl shadow-sm focus:ring focus:ring-blue-200 outline-none"
          placeholder="Search title or description…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      {/* ✅ Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          className={`
            px-4 py-2 rounded-full border transition 
            ${category === "" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}
          `}
          onClick={() => setCategory("")}
        >
          All
        </button>

        {categories.map(c => (
          <button
            key={c}
            className={`
              px-4 py-2 rounded-full border transition
              ${category === c
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"}
            `}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* ✅ Empty State */}
      {filtered.length === 0 && (
        <div className="p-6 bg-gray-50 border rounded-xl text-center shadow-sm text-gray-600">
          <p>
            No resources found. Try adjusting your search, or{" "}
            <Link className="text-blue-600 underline" to="/add">add a new one</Link>.
          </p>
        </div>
      )}

      {/* ✅ Resource Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(r => (
          <article
            key={r.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-gray-900">{r.title}</h3>

              {r.category && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {r.category}
                </span>
              )}
            </div>

            <p className="text-gray-700 mt-3 leading-relaxed min-h-[60px]">
              {r.description}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              {r.url && (
                <a
                  className="px-3 py-2 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Link
                </a>
              )}

              <Link
                className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                to={`/edit/${r.id}`}
              >
                Edit
              </Link>

              <button
                className="px-3 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
                onClick={() => handleDelete(r.id)}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
