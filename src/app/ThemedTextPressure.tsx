'use client';

import React from 'react';
import { useTheme } from '@/once-ui/components';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';

interface ThemedTextPressureProps {
  text: string;
  minFontSize?: number;
  // Add any other props you need to pass to TextPressure
}

export default function ThemedTextPressure({ text, minFontSize = 450, ...props }: ThemedTextPressureProps) {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? '#000000' : '#ffffff';

  return (
    <TextPressure
      text={text}
      flex={true}
      alpha={false}
      stroke={false}
      width={false}
      weight={true}
      italic={false}
      textColor={textColor}
      strokeColor="#ff0000"
      minFontSize={minFontSize}
      {...props}
    />
  );
}
