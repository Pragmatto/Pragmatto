import React from 'react';

export function Badge({ children, variant = 'cyan', className = '' }) {
  const variantStyles = {
    cyan: "bg-sky-50 text-sky-900 border border-sky-200/90",
    blue: "bg-blue-50 text-blue-900 border border-blue-200/90",
    dark: "bg-slate-800/90 text-sky-300 border border-slate-700"
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variantStyles[variant] || variantStyles.cyan} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
      <span>{children}</span>
    </span>
  );
}
