import React from 'react';
import { cn } from '@/lib/utils';

export function FlipbookContainer({ children, className }) {
  return (
    <div className={cn(
      "relative w-full max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20",
      className
    )}>
      {/* Main Container with semi-transparent background */}
      <div className="relative bg-surface/secondary-action/40 rounded-xl overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Blurred Bottom Rectangle */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-white/40 backdrop-blur-[400px]"
          style={{ 
            borderRadius: 'var(--radius-full)',
            opacity: '0.43'
          }}
        />
      </div>
    </div>
  );
}