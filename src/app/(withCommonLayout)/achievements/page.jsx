"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Medal, Star, Shield } from 'lucide-react';

const AchievementCard = ({ item }) => (
  <div className="bg-background/40 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-2">
        <span className="inline-block text-[11px] px-2 py-1 bg-primary/10 text-primary font-bold rounded-md tracking-wider uppercase">
          {item.type}
        </span>
        <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> {item.date}
        </p>
      </div>
      <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 px-4 py-2 rounded-xl text-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <p className="text-primary font-black text-xl leading-none">
          {item.rank}
        </p>
        <p className="text-[9px] text-primary/70 uppercase font-black tracking-widest mt-1">
          Rank
        </p>
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-100 mb-6 group-hover:text-primary transition-colors line-clamp-2 grow">
      {item.title}
    </h3>

    <div className="flex justify-between items-end pt-5 border-t border-gray-800/60 mt-auto">
      <div>
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
          Result
        </p>
        <p className="text-base text-gray-200 font-semibold bg-gray-800/30 px-3 py-1 rounded-lg">
          {item.result}
        </p>
      </div>
      <button className="bg-gray-800 hover:bg-primary hover:text-white text-gray-300 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(var(--primary-color),0.3)]">
        <Trophy size={14} /> Details
      </button>
    </div>
  </div>
);

const AllAchievements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('/api/achievements');
        const data = await response.json();
        if (data && data.length > 0) {
          setAchievements(data);
        } else {
          setAchievements([
            {
              title: "NCPC 2023 - Jahangirnagar University",
              type: "Programming Contest",
              date: "Mar 2024",
              rank: "45th",
              result: "Honorable Mention"
            },
            {
              title: "IUPC 2023 - Dhaka University",
              type: "Programming Contest",
              date: "Dec 2023",
              rank: "12th",
              result: "Top 15 Finalist"
            }
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = achievements.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(achievements.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 -mt-20 lg:-mt-24">
      <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl w-full">
        <div className="mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Medal size={16} /> Honors & Awards
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 tracking-tight">
            All Achievements
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
            A comprehensive archive of my accomplishments in{' '}
            <span className="text-foreground font-semibold">Competitive Programming</span>,
            hackathons, and other technical competitions. Showcasing my dedication to 
            problem-solving and continuous learning.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item, i) => (
                <AchievementCard key={i} item={item} />
              ))}
            </div>

            {achievements.length > itemsPerPage && (
              <div className="mt-14 flex justify-center items-center gap-4">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl border border-gray-800 text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:text-gray-400 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`w-11 h-11 rounded-xl border font-bold transition-all ${
                        currentPage === i + 1
                          ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(var(--primary-color),0.4)] scale-110'
                          : 'border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl border border-gray-800 text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllAchievements;
