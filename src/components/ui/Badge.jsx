import React from 'react';

export function Badge({ children, variant = 'cyan', className = '' }) {
  const variantStyles = {
    cyan: "bg-cyan-50 text-pragmatto-navy border border-cyan-200/60",
    blue: "bg-blue-50 text-pragmatto-blue border border-blue-200/60",
    dark: "bg-pragmatto-navy-light text-cyan-300 border border-pragmatto-cyan/30"
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variantStyles[variant] || variantStyles.cyan} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-pragmatto-cyan animate-pulse"></span>
      {children}
    </span>
  );
}
