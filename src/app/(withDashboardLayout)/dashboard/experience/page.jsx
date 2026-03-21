"use client";
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Edit2, Save } from 'lucide-react';

export default function ExperiencePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: '', type: '', company: '', period: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch('/api/journey').then(res => res.json()).then(d => {
      setData(Array.isArray(d) ? d : []);
      setLoading(false);
    });
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    
    // Parse description by newlines
    let descArray = [];
    if(formData.description) {
        descArray = formData.description.split('\n').map(s => s.trim()).filter(s => s);
    }
    
    await fetch('/api/journey', {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...formData, description: descArray })
    });
    setFormData({ title: '', type: '', company: '', period: '', description: '' });
    setIsEditing(false);
    fetchData();
  };

  const handleDelete = async (title) => {
    if(!confirm('Delete this experience?')) return;
    await fetch(`/api/journey?title=${encodeURIComponent(title)}`, { method: 'DELETE' });
    fetchData();
  };

  const handleEdit = (item) => {
    const descText = Array.isArray(item.description) ? item.description.join('\n') : (item.description || '');
    setFormData({ 
       title: item.title || item.designation || '', 
       type: item.type || '', 
       company: item.company || '', 
       period: item.period || '', 
       description: descText 
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="text-foreground/50 animate-pulse">Loading Experience...</div>;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 w-fit">Manage Experience</h1>
        <p className="text-sm text-foreground/50 mt-2">Update your work experience, internships, or freelance journey.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-10 bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-gray-800 shadow-lg space-y-6 transition-all focus-within:border-primary/40">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
             <label className="block text-sm font-semibold text-foreground/80 ml-1">Job Title / Designation</label>
             <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary disabled:opacity-50" required disabled={isEditing} placeholder="e.g. Frontend Developer" />
             {isEditing && <p className="text-xs text-yellow-500 ml-1">Title cannot be changed while editing.</p>}
           </div>
           <div className="space-y-2">
             <label className="block text-sm font-semibold text-foreground/80 ml-1">Job Type</label>
             <input type="text" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" placeholder="e.g. Full-time, Freelance, Intern" />
           </div>
           <div className="space-y-2">
             <label className="block text-sm font-semibold text-foreground/80 ml-1">Company / Organization</label>
             <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" required placeholder="e.g. Upwork" />
           </div>
           <div className="space-y-2">
             <label className="block text-sm font-semibold text-foreground/80 ml-1">Period</label>
             <input type="text" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" required placeholder="e.g. Jan 2023 - Present" />
           </div>
         </div>
         <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground/80 ml-1">Description / Bullet Points (One per line)</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={4} className="w-full bg-background/60 border border-gray-700/50 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary resize-none placeholder-gray-600" required placeholder={"Developed UI components...\nIntegrated REST APIs...\nOptimized database...\n(Press Enter for a new bullet point)"}></textarea>
         </div>
         <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-gray-800">
           <button type="submit" className="flex-1 bg-primary text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-md">
             {isEditing ? <Save size={18} /> : <Plus size={18} />} {isEditing ? 'Update Experience' : 'Add Experience'}
           </button>
           {isEditing && (
             <button type="button" onClick={() => { setIsEditing(false); setFormData({title: '', type: '', company: '', period: '', description: ''}); }} className="px-8 py-3.5 text-white bg-gray-800 rounded-2xl hover:bg-gray-700 font-medium transition-colors">Cancel Edit</button>
           )}
         </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {data.map(item => (
           <div key={item.title || item.designation} className="bg-card/40 backdrop-blur-sm p-6 rounded-3xl border border-gray-800/60 hover:border-gray-700 hover:bg-card/60 transition-all group relative">
             <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => handleEdit(item)} className="p-2 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"><Edit2 size={16} /></button>
               <button onClick={() => handleDelete(item.title || item.designation)} className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={16} /></button>
             </div>
             <h3 className="font-bold text-xl text-foreground pr-20">{item.title || item.designation}</h3>
             <p className="text-primary text-sm font-medium mt-1">{item.company} {item.type && `• ${item.type}`}</p>
             <p className="text-xs text-gray-500 mt-1">{item.period}</p>
             <ul className="mt-4 space-y-1 list-disc pl-4 text-sm text-foreground/70">
                {Array.isArray(item.description) ? item.description.map((d, i) => <li key={i}>{d}</li>) : <li>{item.description}</li>}
             </ul>
           </div>
         ))}
         {data.length === 0 && <p className="text-foreground/50 col-span-full text-center py-10 bg-card/20 rounded-3xl border border-dashed border-gray-800">No experience records found.</p>}
      </div>
    </div>
  );
}
