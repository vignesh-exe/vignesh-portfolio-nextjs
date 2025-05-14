import React from 'react';
import { Flex } from '@/once-ui/components';

interface VideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = '100%', height = 'auto' }) => {
  // Extract file extension to determine MIME type
  const isMovFile = src.toLowerCase().endsWith('.mov');

  return (
    <Flex
      fillWidth
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        // controls // Add controls to help debug
        style={{
          width,
          height,
          objectFit: 'contain'
        }}
      >
        <source src={src} type={isMovFile ? 'video/quicktime' : 'video/mp4'} />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
};

export default VideoPlayer;
