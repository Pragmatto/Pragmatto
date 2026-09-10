import React from 'react';
import { Badge } from './Badge';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) {
  const alignClasses = {
    center: 'text-center mx-auto max-w-3xl',
    left: 'text-left max-w-2xl',
  };

  return (
    <div className={`space-y-4 mb-12 sm:mb-16 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <div>
          <Badge variant={dark ? 'dark' : 'cyan'}>{badge}</Badge>
        </div>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.2] ${dark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
