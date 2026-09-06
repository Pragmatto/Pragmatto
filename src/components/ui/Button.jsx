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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
    md: "px-6 py-3 text-base rounded-xl gap-2 shadow-sm",
    lg: "px-8 py-4 text-lg rounded-xl gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-pragmatto-blue text-white hover:bg-pragmatto-blue-hover hover:shadow-glow-blue focus:ring-pragmatto-blue active:scale-[0.98]",
    secondary: "bg-white text-pragmatto-navy border border-slate-200 hover:border-pragmatto-blue hover:text-pragmatto-blue hover:shadow-sm focus:ring-pragmatto-blue active:scale-[0.98]",
    outline: "bg-transparent text-pragmatto-navy border-2 border-pragmatto-navy hover:bg-pragmatto-navy hover:text-white focus:ring-pragmatto-navy active:scale-[0.98]",
    cyan: "bg-pragmatto-cyan text-pragmatto-navy font-semibold hover:bg-cyan-400 hover:shadow-glow focus:ring-pragmatto-cyan active:scale-[0.98]",
    dark: "bg-pragmatto-navy text-white hover:bg-pragmatto-navy-light focus:ring-pragmatto-navy active:scale-[0.98]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {children}
      {Icon && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />}
    </button>
  );
}
