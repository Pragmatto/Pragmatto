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
      {badge && <Badge variant={dark ? 'dark' : 'cyan'}>{badge}</Badge>}
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-pragmatto-navy'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-lg sm:text-xl font-normal leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
