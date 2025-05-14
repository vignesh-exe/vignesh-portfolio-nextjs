'use client';
import React, { useState } from 'react';
import { ToggleButton, useTheme } from '@/once-ui/components';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setTheme(theme === 'light' ? 'dark' : 'light');

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match this with your animation duration
  };

  return (
    <div className={`${styles.themeToggleWrapper} ${isAnimating ? styles.animating : ''}`}>
      <ToggleButton
        prefixIcon={theme === 'dark' ? 'sun' : 'moon'}
        onClick={handleToggle}
        selected={false}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className={styles.themeToggleButton}
      />
    </div>
  );
};
