'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo } from 'framer-motion';
import './RollingGallery.css';

const IMGS: string[] = [
  '/images/gallery/puppy.jpg',
  '/images/gallery/river.jpg',
  '/images/gallery/beach.jpg',
  '/images/gallery/field.jpg',
  '/images/gallery/ganesha.jpg',
  '/images/gallery/mahabs.jpg',
  '/images/gallery/me.jpg',
  '/images/gallery/moon.png',
  '/images/gallery/postoffice.jpg',
  '/images/gallery/skeleton.jpg',
  '/images/gallery/vandalur.jpg'
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(window.innerWidth <= 640);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // 3D geometry calculations
  const cylinderWidth: number = isScreenSizeSm ? 1800 : 3000;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const dragFactor: number = 0.05;
  const radius: number = cylinderWidth / (2 * Math.PI);

  // Framer Motion values and controls
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: 'easeOut'
      }
    });

    // Restart autoplay after drag ends
    if (autoplay && !isPaused) {
      startAutoplay();
    }
  };

  // Create a 3D transform based on the rotation motion value
  const transform = useTransform(rotation, (value: number) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  // Continuous autoplay function
  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      const currentRotation = rotation.get();
      const newRotation = currentRotation - 360 / faceCount;

      controls.start({
        rotateY: newRotation,
        transition: {
          duration: 3, // Slower, smoother rotation
          ease: 'linear'
        }
      });

      rotation.set(newRotation);
    }, 3000); // 3 second intervals
  };

  // Continuous spinning autoplay effect
  // Replace the autoplay useEffect with this:
  useEffect(() => {
    if (autoplay && !isPaused) {
      // Continuous infinite rotation
      controls.start({
        rotateY: -360, // Full rotation
        transition: {
          duration: 20, // 20 seconds for full rotation
          ease: 'linear',
          repeat: Infinity, // Infinite loop
          repeatType: 'loop'
        }
      });

      return () => {
        controls.stop();
      };
    }
  }, [autoplay, isPaused, controls]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pause on hover with smooth transition
  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      setIsPaused(true);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      setIsPaused(false);
      startAutoplay();
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
