'use client';

import { useEffect, useState } from 'react';
import { Flex } from '@/once-ui/components';
import SplitText from '@/blocks/TextAnimations/SplitText/SplitText';
import Counter from '@/blocks/Components/Counter/Counter';

interface InitialLoadingLayoutProps {
  children: React.ReactNode;
}

export default function InitialLoadingLayout({
  children,
}: InitialLoadingLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const hasCompletedInitialLoad =
      sessionStorage.getItem('initialLoadComplete') === 'true';

    if (hasCompletedInitialLoad) {
      setIsLoading(false);
      return;
    }

    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }

      setLoadingPercentage(progress);
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);

      sessionStorage.setItem(
        'initialLoadComplete',
        'true'
      );

      clearInterval(progressInterval);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  /*
   * Important:
   * During SSR and the first client render, return the same
   * markup so React doesn't encounter a hydration mismatch.
   */
  if (!isMounted) {
    return null;
  }

  if (!isLoading) {
    return <>{children}</>;
  }

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
      <div
        className="text-center"
        style={{
          fontSize: '70px',
          fontWeight: 'bolder',
        }}
      >
        <SplitText
          text="Perfecting pixels… almost there!!!"
          className="text-2xl font-semibold text-center"
          delay={50}
          animationFrom={{
            opacity: 0,
            transform: 'translate3d(0,50px,0)',
          }}
          animationTo={{
            opacity: 1,
            transform: 'translate3d(0,0,0)',
          }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
              color:
                'var(--color-text-primary, rgb(141, 152, 152))',
              marginLeft: '4px',
            }}
          >
            %
          </span>
        </div>
      </div>
    </Flex>
  );
}