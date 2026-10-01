import React from "react";
import * as Icons from "lucide-react";

export function ServiceCard({
  id,
  title,
  category,
  description,
  iconName,
  features = [],
  onClick,
}) {
  const IconComponent = Icons[iconName] || Icons.Code2;

  return (
    <div
      onClick={onClick}
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div>
        {/* Category & Icon Header */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
              {category}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
          {description}
        </p>
      </div>

      {/* Feature Deliverables & Know More link */}
      <div className="pt-4 border-t border-slate-100 mt-auto space-y-4">
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 6).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/80"
              >
                <Icons.Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        )}

        {onClick && (
          <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
            <span>Know More</span>
            <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );
}
