/**
 * LightStreaks Component
 *
 * Foreground light ray effects that create cinematic "god rays" appearance.
 * Uses brand yellow (#ffcb33) at very low opacity for subtle visual depth.
 *
 * Design:
 * - Diagonal light streaks positioned strategically
 * - Extremely subtle (opacity 0.03-0.05)
 * - Non-interactive (pointer-events-none)
 * - Creates foreground separation and depth
 */

import React from 'react';

export const LightStreaks: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal light ray 1 - top left to center */}
      <div
        className="absolute top-0 left-0 w-96 h-screen"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 203, 51, 0.05) 0%, transparent 60%)',
          opacity: 0.5,
          mixBlendMode: 'screen', // Cinematic light blend mode
        }}
      />

      {/* Diagonal light ray 2 - top right */}
      <div
        className="absolute top-0 right-0 w-80 h-screen"
        style={{
          background: 'linear-gradient(225deg, rgba(255, 203, 51, 0.04) 0%, transparent 50%)',
          opacity: 0.6,
          mixBlendMode: 'screen',
        }}
      />

      {/* Accent glow - center (only visible on larger screens) */}
      <div
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 203, 51, 0.03) 0%, transparent 70%)',
          opacity: 0.4,
          mixBlendMode: 'screen',
        }}
      />

      {/* Bottom accent streak - subtle uplift */}
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(255, 203, 51, 0.04) 0%, transparent 60%)',
          opacity: 0.5,
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
