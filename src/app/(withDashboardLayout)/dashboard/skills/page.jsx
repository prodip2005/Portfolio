"use client";
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Edit2, Save } from 'lucide-react';

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: '', skills: '' });
  const [isEditing, setIsEditing] = useState(false);

  const fetchSkills = () => {
    setLoading(true);
    fetch('/api/skills').then(res => res.json()).then(data => {
      setSkills(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(() => { fetchSkills(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      skills: formData.skills.split(',').map(s => s.trim()).filter(s => s)
    };

    const method = isEditing ? 'PUT' : 'POST';
    // When POSTing single via our API it inserts
    await fetch('/api/skills', {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    
    setFormData({ title: '', skills: '' });
    setIsEditing(false);
    fetchSkills();
  };

  const handleDelete = async (title) => {
    if(!confirm('Delete this category?')) return;
    await fetch(`/api/skills?title=${encodeURIComponent(title)}`, { method: 'DELETE' });
    fetchSkills();
  };

  const handleEdit = (category) => {
    setFormData({ title: category.title, skills: (category.skills || []).join(', ') });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="text-foreground/50 animate-pulse">Loading Skills...</div>;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 w-fit">Manage Skills</h1>
        <p className="text-sm text-foreground/50 mt-2">Add technical skill categories like "Frontend" or "Database".</p>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-10 bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-gray-800 flex flex-col lg:flex-row gap-6 items-end shadow-lg transition-all focus-within:border-primary/40">
         <div className="flex-1 w-full space-y-2">
           <label className="block text-sm font-semibold text-foreground/80 ml-1">Category Title</label>
           <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed" required disabled={isEditing} placeholder="e.g. Frontend" />
         </div>
         <div className="flex-[2] w-full space-y-2">
           <label className="block text-sm font-semibold text-foreground/80 ml-1">Skills (comma separated)</label>
           <input type="text" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" required placeholder="React, Next.js, TailwindCss" />
         </div>
         <div className="w-full lg:w-auto flex gap-3">
           <button type="submit" className="flex-1 lg:flex-none bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-md">
             {isEditing ? <Save size={18} /> : <Plus size={18} />} {isEditing ? 'Update' : 'Add'}
           </button>
           {isEditing && (
             <button type="button" onClick={() => { setIsEditing(false); setFormData({title:'', skills:''}); }} className="px-6 py-3 text-white bg-gray-800 rounded-2xl hover:bg-gray-700 font-medium transition-colors">Cancel</button>
           )}
         </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {skills.map(cat => (
           <div key={cat._id || cat.title} className="bg-card/40 backdrop-blur-sm p-6 rounded-3xl border border-gray-800/60 hover:border-gray-700 hover:bg-card/60 transition-all group">
             <div className="flex justify-between items-start mb-4">
               <h3 className="font-bold text-xl text-foreground">{cat.title}</h3>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={() => handleEdit(cat)} className="p-2 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"><Edit2 size={16} /></button>
                 <button onClick={() => handleDelete(cat.title)} className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={16} /></button>
               </div>
             </div>
             <div className="flex flex-wrap gap-2">
                {(cat.skills||[]).map(s => (
                  <span key={s} className="px-3 py-1 bg-background border border-gray-800 rounded-lg text-xs text-foreground/70">{s}</span>
                ))}
             </div>
           </div>
         ))}
         {skills.length === 0 && <p className="text-foreground/50 col-span-full text-center py-10 bg-card/20 rounded-3xl border border-dashed border-gray-800">No skills categories found. Add one above!</p>}
      </div>
    </div>
  );
}
