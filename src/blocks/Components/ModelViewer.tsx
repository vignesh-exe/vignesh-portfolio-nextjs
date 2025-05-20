'use client';

import React, { useEffect, useRef, useState } from 'react';
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
          'min-camera-orbit'?: string;
          'max-camera-orbit'?: string;
          'min-field-of-view'?: string;
          'max-field-of-view'?: string;
          'disable-zoom'?: boolean;
          'interaction-prompt'?: string;
          'interaction-policy'?: string;
          'touch-action'?: string;
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
  const [isGrabMode, setIsGrabMode] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      // Disable zoom
      modelViewer.addEventListener(
        'wheel',
        event => {
          if (!isGrabMode) {
            // Allow normal scrolling when not in grab mode
            return;
          }
          // Prevent zooming only when in grab mode
          event.preventDefault();
        },
        { passive: false }
      );

      // Toggle grab mode on click
      modelViewer.addEventListener('click', event => {
        // Toggle grab mode
        setIsGrabMode(prevMode => !prevMode);

        // If entering grab mode, set grabbing state
        if (!isGrabMode) {
          setIsGrabbing(true);
        } else {
          setIsGrabbing(false);
        }

        // Prevent the click from affecting other elements
        event.stopPropagation();
      });

      // Handle mouse down in grab mode
      modelViewer.addEventListener('mousedown', event => {
        if (isGrabMode) {
          setIsGrabbing(true);
          // Prevent default only in grab mode to allow normal scrolling otherwise
          event.preventDefault();
        }
      });

      // Handle mouse up
      const handleMouseUp = () => {
        if (isGrabMode) {
          setIsGrabbing(false);
        }
      };

      // Add event listeners
      modelViewer.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseup', handleMouseUp);

      // Reset on mouse leave
      modelViewer.addEventListener('mouseleave', () => {
        setIsGrabbing(false);
      });

      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isGrabMode, isGrabbing]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <model-viewer
        ref={modelViewerRef}
        src={src}
        alt={alt}
        ar={ar}
        ar-modes="webxr scene-viewer quick-look"
        camera-controls={isGrabMode ? cameraControls : false}
        auto-rotate={!isGrabMode && autoRotate}
        environment-image={environmentImage}
        exposure={exposure}
        shadow-intensity={shadowIntensity}
        loading="eager"
        poster={poster}
        disable-zoom={true}
        min-field-of-view="45deg"
        max-field-of-view="45deg"
        interaction-prompt="none"
        interaction-policy={isGrabMode ? 'allow-when-focused' : 'none'}
        touch-action={isGrabMode ? 'none' : 'auto'}
        style={{
          width: '100%',
          height: '100%',
          cursor: isGrabMode ? (isGrabbing ? 'grabbing' : 'grab') : 'pointer'
        }}
      ></model-viewer>

      {/* Optional: Add a visual indicator for grab mode */}
      {isGrabMode && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            pointerEvents: 'none'
          }}
        >
          Rotation Mode (Click to Exit)
        </div>
      )}
    </div>
  );
};

export default ModelViewer;
