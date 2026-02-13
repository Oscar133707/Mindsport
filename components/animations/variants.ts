/**
 * Framer Motion Animation Variants
 *
 * Reusable animation variants for consistent motion across the site.
 * All animations follow the "focus & determination" principle:
 * - Fast timing (300-500ms equivalent spring duration)
 * - Sharp movements (high stiffness, low bounce)
 * - Purposeful direction (forward/upward momentum)
 */

import { Variants } from 'framer-motion';
import { springs } from './springs';

/**
 * Hero text reveal variants
 * Words snap into place with staggered timing
 */
export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.sharp,
  },
};

/**
 * Parent container for staggering child animations
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // 150ms delay between each child
    },
  },
};

/**
 * Subtitle/paragraph text reveal
 * Slightly faster with subtle scale
 */
export const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.sharp,
  },
};

/**
 * CTA Button entrance animation
 */
export const ctaEntranceVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springs.sharp,
      delay: 0.6, // Wait for text to appear first
    },
  },
};

/**
 * CTA Button hover interaction
 * Sharp scale up with shadow enhancement
 */
export const ctaButtonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: springs.snappy,
  },
  tap: {
    scale: 0.96,
    transition: springs.snappy,
  },
};

/**
 * Arrow icon slide animation on button hover
 */
export const arrowSlideVariants: Variants = {
  initial: {
    x: 0,
  },
  hover: {
    x: 5,
    transition: springs.snappy,
  },
};

/**
 * Hero image entrance
 * Subtle fade with slight scale
 */
export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.smooth,
      delay: 0.2,
    },
  },
};

/**
 * Fade in variant (simple)
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: springs.smooth,
  },
};

/**
 * Slide up and fade (for general content)
 */
export const slideUpFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.sharp,
  },
};
