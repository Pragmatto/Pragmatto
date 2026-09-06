import React from 'react';
import { siteContent } from '../../data/siteContent';
import { ArrowRight } from 'lucide-react';

export function StickyAnnouncementBar({ onNavigate }) {
  const { announcement } = siteContent;

  return (
    <div className="bg-pragmatto-navy text-white text-xs sm:text-sm py-2.5 px-4 text-center border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium">
        <span className="text-slate-200">{announcement.text}</span>
        <button
          onClick={() => onNavigate && onNavigate('careers')}
          className="inline-flex items-center gap-1 text-pragmatto-cyan font-semibold hover:underline cursor-pointer"
        >
          {announcement.ctaText}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
