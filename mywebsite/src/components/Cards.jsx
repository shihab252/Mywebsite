import React from 'react';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
  return (
    <div className="group bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Image Wrap */}
      <div className="overflow-hidden relative aspect-video bg-gray-900">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
      </div>

      {/* Details Container */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-xl text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {item.desc}
          </p>
        </div>

        {/* Dynamic CTAs */}
        <div className="flex items-center gap-3 pt-2">
          <a 
            href={item.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition duration-300 shadow-lg shadow-red-900/20"
          >
            Live Preview
          </a>
          <a 
            href={item.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-2.5 px-4 rounded-xl border border-white/10 transition duration-300"
          >
            <img src={Github} alt="GitHub" className="w-4 h-4 filter invert brightness-200" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;