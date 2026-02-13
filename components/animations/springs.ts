/**
 * Spring Physics Configurations for Framer Motion
 *
 * These spring configurations create the "focus & determination" feel:
 * - High stiffness (300+) for sharp, purposeful movements
 * - Higher damping (20+) for minimal bounce
 * - Fast response times that feel intentional, not playful
 */

export const springs = {
  /**
   * Sharp spring for text reveals and primary animations
   * Fast, purposeful snap into place - like an athlete's focused mindset
   */
  sharp: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },

  /**
   * Smooth spring for interactive parallax and mouse tracking
   * Slightly lower stiffness for fluid but still purposeful movement
   */
  smooth: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
  },

  /**
   * Snappy spring for button interactions
   * Very fast response for immediate feedback
   */
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },

  /**
   * Gentle spring for subtle breathing animations
   * Lower stiffness for calm, rhythmic movement
   */
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  },
} as const;

/**
 * Duration-based transitions for reduced motion preferences
 * When user has prefers-reduced-motion enabled, use instant tweens
 */
export const reducedMotionTransition = {
  type: "tween" as const,
  duration: 0,
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get appropriate transition based on user preference
 */
export const getTransition = (defaultTransition: typeof springs.sharp) => {
  return prefersReducedMotion() ? reducedMotionTransition : defaultTransition;
};
