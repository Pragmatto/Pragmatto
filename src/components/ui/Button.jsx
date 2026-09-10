import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "group inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
    md: "px-6 py-3 text-base rounded-xl gap-2 shadow-xs",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl gap-2.5 shadow-sm hover:-translate-y-0.5",
  };

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-600",
    secondary: "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus:ring-blue-600",
    outline: "bg-transparent text-slate-900 border-2 border-slate-800 hover:bg-slate-900 hover:text-white focus:ring-slate-900",
    cyan: "bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 focus:ring-sky-500",
    dark: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />}
    </button>
  );
}
