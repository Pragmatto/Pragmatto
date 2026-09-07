import React from 'react';
import * as Icons from 'lucide-react';

export function FeatureCard({ title, description, iconName, index }) {
  const IconComponent = Icons[iconName] || Icons.CheckCircle;

  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 hover:border-pragmatto-blue/40 transition-all duration-300 h-full flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-pragmatto-blue flex items-center justify-center shrink-0 shadow-xs">
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-pragmatto-navy mb-2">
            {title}
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
