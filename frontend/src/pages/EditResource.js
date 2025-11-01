import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditResource() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    url: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Load existing resource
  useEffect(() => {
    axios
      .get(`${API_BASE}/resources/${id}`)
      .then((res) => {
        setForm(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load resource.");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    try {
      await axios.put(`${API_BASE}/resources/${id}`, form);
      navigate("/");
    } catch (err) {
      setError("Failed to update resource.");
    }
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Edit Resource</h2>

      {error && (
        <div className="p-3 mb-4 bg-red-200 text-red-700 rounded">{error}</div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* TITLE */}
        <div>
          <label className="block mb-1 font-medium">Title *</label>
          <input
            type="text"
            className="input w-full"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="input w-full h-32"
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
          />
        </div>

        {/* URL */}
        <div>
          <label className="block mb-1 font-medium">Link (URL)</label>
          <input
            type="url"
            className="input w-full"
            value={form.url}
            onChange={(e) => updateField("url", e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            className="input w-full"
            placeholder="e.g., Mathematics, Computing, Science"
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
          />
        </div>

        {/* SUBMIT */}
        <button className="btn-primary w-full py-3 text-lg">
          Save Changes
        </button>
      </form>
    </div>
  );
}
