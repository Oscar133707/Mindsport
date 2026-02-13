/**
 * useMouseParallax Hook
 *
 * Tracks mouse position and converts it to transform values for parallax effects.
 * Creates a "following" effect where elements tilt based on cursor position.
 *
 * Features:
 * - Smooth spring-based movement (no jank)
 * - Automatically disabled on touch devices and mobile
 * - Performance-optimized with proper cleanup
 * - Configurable strength parameter
 */

import { useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface UseMouseParallaxOptions {
  strength?: number; // Multiplier for parallax intensity (default: 10)
  stiffness?: number; // Spring stiffness (default: 200)
  damping?: number; // Spring damping (default: 25)
}

interface UseMouseParallaxReturn {
  isEnabled: boolean;
  x: any; // MotionValue
  y: any; // MotionValue
  rotateX: any; // MotionValue for 3D rotation
  rotateY: any; // MotionValue for 3D rotation
}

export const useMouseParallax = (
  options: UseMouseParallaxOptions = {}
): UseMouseParallaxReturn => {
  const { strength = 10, stiffness = 200, damping = 25 } = options;

  const [isEnabled, setIsEnabled] = useState(false);

  // Raw mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth values using spring physics for purposeful, determined movement
  const smoothX = useSpring(mouseX, { stiffness, damping });
  const smoothY = useSpring(mouseY, { stiffness, damping });

  // 3D rotation values (for tilt effect)
  const rotateX = useSpring(mouseX, { stiffness, damping });
  const rotateY = useSpring(mouseY, { stiffness, damping });

  useEffect(() => {
    // Only enable on desktop, non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = window.innerWidth < 769;

    if (isTouchDevice || isMobile) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // Calculate normalized position (-0.5 to 0.5)
      const normalizedX = e.clientX / innerWidth - 0.5;
      const normalizedY = e.clientY / innerHeight - 0.5;

      // Apply strength multiplier for parallax offset
      const offsetX = normalizedX * strength;
      const offsetY = normalizedY * strength;

      mouseX.set(offsetX);
      mouseY.set(offsetY);

      // For 3D rotation (inverted Y for natural tilt)
      // Max rotation: ±5 degrees
      const maxRotation = 5;
      rotateX.set(-normalizedY * maxRotation); // Negative for correct tilt direction
      rotateY.set(normalizedX * maxRotation);
    };

    // Add event listener (passive for better scroll performance)
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, rotateX, rotateY, strength, stiffness, damping]);

  return {
    isEnabled,
    x: smoothX,
    y: smoothY,
    rotateX,
    rotateY,
  };
};
