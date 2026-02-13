/**
 * useLayeredMouseParallax Hook
 *
 * Multi-layer parallax system with center-point perspective.
 * Creates BB Goalie-style cinematic depth by tracking mouse position
 * and applying different parallax strengths to multiple layers.
 *
 * Features:
 * - Center-point perspective (layers converge toward viewport center)
 * - Configurable strength per layer for depth effect
 * - Smooth spring-based movement
 * - Automatically disabled on touch devices and mobile
 * - Optional 3D rotation for specific layers
 * - Performance-optimized with proper cleanup
 */

import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

interface LayerConfig {
  strength: number; // Parallax intensity (higher = more movement)
  enableRotation?: boolean; // Enable 3D tilt effect (default: false)
}

interface LayerTransform {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

interface UseLayeredMouseParallaxOptions {
  layers: LayerConfig[];
  stiffness?: number; // Spring stiffness (default: 200)
  damping?: number; // Spring damping (default: 25)
}

interface UseLayeredMouseParallaxReturn {
  isEnabled: boolean;
  layers: LayerTransform[];
}

export const useLayeredMouseParallax = (
  options: UseLayeredMouseParallaxOptions
): UseLayeredMouseParallaxReturn => {
  const { layers, stiffness = 200, damping = 25 } = options;

  const [isEnabled, setIsEnabled] = useState(false);

  // Create motion values for each layer (underlying values + spring-smoothed)
  const layerData = layers.map(() => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateXValue = useMotionValue(0);
    const rotateYValue = useMotionValue(0);

    return {
      underlying: { mouseX, mouseY, rotateXValue, rotateYValue },
      smooth: {
        x: useSpring(mouseX, { stiffness, damping }),
        y: useSpring(mouseY, { stiffness, damping }),
        rotateX: useSpring(rotateXValue, { stiffness, damping }),
        rotateY: useSpring(rotateYValue, { stiffness, damping }),
      },
    };
  });

  // Extract smooth transforms for return
  const layerTransforms: LayerTransform[] = layerData.map((data) => data.smooth);

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

      // Center-point perspective calculation
      // Calculate mouse position relative to viewport center
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      // Normalize position relative to center (-0.5 to 0.5 at edges, 0 at center)
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      // Apply strength multiplier per layer for depth effect
      layers.forEach((layer, index) => {
        const offsetX = normalizedX * layer.strength;
        const offsetY = normalizedY * layer.strength;

        // Get the underlying MotionValues and set them (spring will smooth)
        const { underlying } = layerData[index];
        underlying.mouseX.set(offsetX);
        underlying.mouseY.set(offsetY);

        // Apply 3D rotation only if enabled for this layer
        if (layer.enableRotation) {
          const maxRotation = 5; // ±5 degrees max tilt
          const rotateXValue = -normalizedY * maxRotation; // Negative for natural tilt
          const rotateYValue = normalizedX * maxRotation;

          underlying.rotateXValue.set(rotateXValue);
          underlying.rotateYValue.set(rotateYValue);
        } else {
          underlying.rotateXValue.set(0);
          underlying.rotateYValue.set(0);
        }
      });
    };

    // Add event listener (passive for better performance)
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [layers, layerData, stiffness, damping]);

  return {
    isEnabled,
    layers: layerTransforms,
  };
};
