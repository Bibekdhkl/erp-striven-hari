'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="theme-toggle-placeholder" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track background scenery */}
      <div className="theme-toggle__track">
        {/* Stars (visible in dark mode) */}
        <div className="theme-toggle__stars">
          <span className="theme-toggle__star" style={{ top: '6px', left: '8px', animationDelay: '0s' }} />
          <span className="theme-toggle__star" style={{ top: '14px', left: '16px', animationDelay: '0.4s' }} />
          <span className="theme-toggle__star" style={{ top: '4px', left: '22px', animationDelay: '0.8s' }} />
          <span className="theme-toggle__star" style={{ top: '10px', left: '28px', animationDelay: '1.2s' }} />
          <span className="theme-toggle__star" style={{ top: '16px', left: '6px', animationDelay: '0.6s' }} />
          <span className="theme-toggle__star" style={{ top: '8px', left: '34px', animationDelay: '1.0s' }} />
        </div>

        {/* Clouds (visible in light mode) */}
        <div className="theme-toggle__clouds">
          <span className="theme-toggle__cloud theme-toggle__cloud--1" />
          <span className="theme-toggle__cloud theme-toggle__cloud--2" />
        </div>
      </div>

      {/* Thumb (Sun / Moon) */}
      <div className="theme-toggle__thumb">
        {/* Sun rays */}
        <div className="theme-toggle__sun-rays">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="theme-toggle__ray"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
        </div>
        {/* Moon crater overlay */}
        <div className="theme-toggle__moon-craters">
          <span className="theme-toggle__crater theme-toggle__crater--1" />
          <span className="theme-toggle__crater theme-toggle__crater--2" />
          <span className="theme-toggle__crater theme-toggle__crater--3" />
        </div>
      </div>
    </button>
  );
}
