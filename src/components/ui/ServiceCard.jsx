import React from 'react';
import * as Icons from 'lucide-react';

export function ServiceCard({ title, category, description, iconName, features = [] }) {
  const IconComponent = Icons[iconName] || Icons.Code;

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 hover:border-pragmatto-blue/40 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
      
      {/* Subtle geometric triangular corner highlight */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pragmatto-cyan/20 fill-current">
          <polygon points="100,0 100,100 0,0" />
        </svg>
      </div>

      <div>
        {/* Category & Icon Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-pragmatto-blue flex items-center justify-center group-hover:bg-pragmatto-blue group-hover:text-white transition-colors duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>
          {category && (
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-pragmatto-blue transition-colors">
              {category}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-extrabold text-pragmatto-navy mb-3 group-hover:text-pragmatto-blue transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
          {description}
        </p>
      </div>

      {/* Feature Deliverables */}
      {features.length > 0 && (
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <div className="flex flex-wrap gap-2">
            {features.map((feat, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">
                <Icons.Check className="w-3.5 h-3.5 text-pragmatto-cyan shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
