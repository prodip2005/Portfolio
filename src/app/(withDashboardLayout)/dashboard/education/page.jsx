'use client';
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Edit2, Save } from 'lucide-react';

export default function EducationPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    degree: '',
    major: '',
    institution: '',
    period: '',
    status: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch('/api/education')
      .then((res) => res.json())
      .then((d) => {
        setData(Array.isArray(d) ? d : []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    await fetch('/api/education', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({
      degree: '',
      major: '',
      institution: '',
      period: '',
      status: '',
    });
    setIsEditing(false);
    fetchData();
  };

  const handleDelete = async (degree) => {
    if (!confirm('Delete this education entry?')) return;
    await fetch(`/api/education?degree=${encodeURIComponent(degree)}`, {
      method: 'DELETE',
    });
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({
      degree: item.degree || '',
      major: item.major || '',
      institution: item.institution || '',
      period: item.period || '',
      status: item.status || '',
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading)
    return (
      <div className="text-foreground/50 animate-pulse">
        Loading Education...
      </div>
    );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 w-fit">
          Manage Education
        </h1>
        <p className="text-sm text-foreground/50 mt-2">
          Add your academic background and degrees.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-gray-800 shadow-lg space-y-6 transition-all focus-within:border-primary/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">
              Degree Title
            </label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
              className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary disabled:opacity-50"
              required
              disabled={isEditing}
              placeholder="e.g. B.Sc in CSE"
            />
            {isEditing && (
              <p className="text-xs text-yellow-500 ml-1">
                Degree title cannot be changed while editing.
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">
              Major / Group (Optional)
            </label>
            <input
              type="text"
              value={formData.major}
              onChange={(e) =>
                setFormData({ ...formData, major: e.target.value })
              }
              className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary"
              placeholder="e.g. Science"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">
              Institution
            </label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) =>
                setFormData({ ...formData, institution: e.target.value })
              }
              className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary"
              required
              placeholder="e.g. PSTU"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">
              Period
            </label>
            <input
              type="text"
              value={formData.period}
              onChange={(e) =>
                setFormData({ ...formData, period: e.target.value })
              }
              className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary"
              required
              placeholder="e.g. 2024 - Present"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">
              Status (e.g., Ongoing, Graduated)
            </label>
            <input
              type="text"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary"
              placeholder="e.g. Ongoing"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-gray-800">
          <button
            type="submit"
            className="flex-1 bg-primary text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-md"
          >
            {isEditing ? <Save size={18} /> : <Plus size={18} />}{' '}
            {isEditing ? 'Update Education' : 'Add Education'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setFormData({
                  degree: '',
                  major: '',
                  institution: '',
                  period: '',
                  status: '',
                });
              }}
              className="px-8 py-3.5 text-white bg-gray-800 rounded-2xl hover:bg-gray-700 font-medium transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.degree}
            className="bg-card/40 backdrop-blur-sm p-6 rounded-3xl border border-gray-800/60 hover:border-gray-700 hover:bg-card/60 transition-all group relative"
          >
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleEdit(item)}
                className="p-2 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDelete(item.degree)}
                className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <h3 className="font-bold text-xl text-foreground pr-20">
              {item.degree}
            </h3>
            {item.major && (
              <p className="text-primary text-sm font-medium mt-1">
                {item.major}
              </p>
            )}
            <div className="mt-4 space-y-1">
              <p className="text-sm text-foreground/70">
                <span className="font-medium">Institution:</span>{' '}
                {item.institution}
              </p>
              <p className="text-sm text-foreground/70">
                <span className="font-medium">Period:</span> {item.period}
              </p>
              {item.status && (
                <p className="text-sm text-foreground/70">
                  <span className="font-medium">Status:</span> {item.status}
                </p>
              )}
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-foreground/50 col-span-full text-center py-10 bg-card/20 rounded-3xl border border-dashed border-gray-800">
            No education entries found.
          </p>
        )}
      </div>
    </div>
  );
}
