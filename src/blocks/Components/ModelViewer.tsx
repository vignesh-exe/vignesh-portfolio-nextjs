'use client';
import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

// Extend the HTMLElement interface to include model-viewer properties
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          alt?: string;
          ar?: boolean;
          'ar-modes'?: string;
          autoRotate?: boolean;
          cameraControls?: boolean;
          environmentImage?: string;
          exposure?: string;
          shadowIntensity?: string;
          loading?: 'eager' | 'lazy';
          poster?: string;
          reveal?: 'auto' | 'manual';
          'camera-orbit'?: string;
          'auto-rotate-delay'?: string;
          'rotation-per-second'?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface ModelViewerProps {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  environmentImage?: string;
  exposure?: string;
  shadowIntensity?: string;
  poster?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt = '3D Model',
  ar = false,
  autoRotate = true,
  cameraControls = true,
  environmentImage,
  exposure = '1',
  shadowIntensity = '1',
  poster
}) => {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Optional: Add any initialization logic here
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      // You can add event listeners or customize the model-viewer here
    }
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt={alt}
      ar={ar}
      ar-modes="webxr scene-viewer quick-look"
      camera-controls={cameraControls}
      auto-rotate={autoRotate}
      environment-image={environmentImage}
      exposure={exposure}
      shadow-intensity={shadowIntensity}
      loading="eager"
      poster={poster}
      style={{ width: '100%', height: '100%' }}
    ></model-viewer>
  );
};

export default ModelViewer;
