/**
 * GeometricShapes Component
 *
 * Decorative geometric elements for the hero background layer.
 * Creates subtle depth and visual interest without interfering with main content.
 *
 * Design:
 * - Positioned in safe zones (corners, edges)
 * - Dark gray (#2a2a2a) with low opacity (0.1-0.2)
 * - Non-interactive (pointer-events-none)
 * - Hexagons and angular lines for athletic/determined vibe
 */

import React from 'react';

export const GeometricShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left corner cluster */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20">
        {/* Large hexagon */}
        <div
          className="absolute w-20 h-20 md:w-32 md:h-32 border-2 border-[#2a2a2a]"
          style={{
            opacity: 0.15,
            transform: 'rotate(45deg)',
            borderRadius: '4px',
          }}
        />
        {/* Medium hexagon */}
        <div
          className="absolute top-12 left-12 md:top-20 md:left-20 w-12 h-12 md:w-20 md:h-20 border-2 border-[#2a2a2a]"
          style={{
            opacity: 0.12,
            transform: 'rotate(12deg)',
            borderRadius: '2px',
          }}
        />
        {/* Small accent square */}
        <div
          className="absolute top-6 left-6 md:top-10 md:left-10 w-8 h-8 md:w-12 md:h-12 border border-[#2a2a2a]"
          style={{
            opacity: 0.1,
            transform: 'rotate(30deg)',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Bottom-right corner angular lines */}
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20">
        {/* Diagonal line 1 */}
        <div
          className="absolute w-24 h-0.5 md:w-40 md:h-1 bg-[#2a2a2a]"
          style={{
            opacity: 0.15,
            transform: 'rotate(-45deg)',
            transformOrigin: 'right bottom',
          }}
        />
        {/* Diagonal line 2 */}
        <div
          className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-16 h-0.5 md:w-28 md:h-1 bg-[#2a2a2a]"
          style={{
            opacity: 0.12,
            transform: 'rotate(-30deg)',
            transformOrigin: 'right bottom',
          }}
        />
        {/* Small accent rectangle */}
        <div
          className="absolute -bottom-8 -right-2 md:-bottom-12 md:-right-4 w-12 h-6 md:w-20 md:h-10 border border-[#2a2a2a]"
          style={{
            opacity: 0.1,
            transform: 'rotate(-20deg)',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Top-right subtle accent (optional, only on larger screens) */}
      <div className="hidden lg:block absolute top-32 right-32">
        <div
          className="w-16 h-16 border border-[#2a2a2a]"
          style={{
            opacity: 0.08,
            transform: 'rotate(60deg)',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Bottom-left subtle accent (optional, only on larger screens) */}
      <div className="hidden lg:block absolute bottom-32 left-32">
        <div
          className="w-14 h-14 border border-[#2a2a2a]"
          style={{
            opacity: 0.08,
            transform: 'rotate(15deg)',
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  );
};
