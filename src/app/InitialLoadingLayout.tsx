'use client';

import { useEffect, useState } from 'react';
import { Flex, Spinner } from '@/once-ui/components';
import { usePathname, useSearchParams } from 'next/navigation';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import Counter from '@/blocks/Components/Counter/Counter';
import SplitText from '@/blocks/TextAnimations/SplitText/SplitText';

interface InitialLoadingLayoutProps {
  children: React.ReactNode;
}

export default function InitialLoadingLayout({ children }: InitialLoadingLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Effect for initial page load only
  useEffect(() => {
    // Skip loading if not the first load
    if (initialLoadComplete) {
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingPercentage(prev => {
        if (prev >= 99) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    // Set initial loading to false after timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      setInitialLoadComplete(true);
      clearInterval(progressInterval);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []); // Empty dependency array - runs only once on mount

  // If not the initial load, don't show loading screen
  if (!isLoading || (initialLoadComplete && pathname !== undefined)) {
    return <>{children}</>;
  }

  // Show loading screen only for initial load
  return (
    <Flex
      fillWidth
      fillHeight
      vertical="center"
      horizontal="center"
      gap="l"
      style={{ minHeight: '100vh' }}
      direction="column"
    >
      <Spinner size="xl" />
      <Flex direction="column" gap="s" horizontal="center">
        <div className="text-center" style={{ fontSize: '70px', fontWeight: 'bolder' }}>
          <SplitText
            text="Perfecting pixels… almost there!!!"
            className="text-2xl font-semibold text-center"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Counter
            value={loadingPercentage}
            fontSize={52}
            gap={1}
            places={[100, 10, 1]}
            textColor="var(--color-text-primary, #ffffff)"
            fontWeight="bold"
            gradientFrom="rgba(0,0,0,0.2)"
            gradientTo="transparent"
          />
          <span
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              color: 'var(--color-text-primary,rgb(141, 152, 152))',
              marginLeft: '4px'
            }}
          >
            %
          </span>
        </div>
      </Flex>
    </Flex>
  );
}
