'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Flex, RevealFx } from '@/once-ui/components';

// Dynamically import the GLB viewer component with no SSR
const ModelViewer = dynamic(() => import('@/blocks/Components/ModelViewer'), { ssr: false });

export default function ModelViewerSection() {
  return (
    <Flex flex={1} horizontal="center" vertical="center">
      <RevealFx translateY="4" delay={0.3}>
        <div
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}
        >
          <ModelViewer
            src="/images/vicky.glb"
            alt="3D Model"
            ar
            autoRotate
            cameraControls
            exposure="1"
            shadowIntensity="1"
          />
        </div>
      </RevealFx>
    </Flex>
  );
}
