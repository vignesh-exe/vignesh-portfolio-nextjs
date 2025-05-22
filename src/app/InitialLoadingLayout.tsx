'use client';

import { useEffect, useState } from 'react';
import { Flex, Spinner } from '@/once-ui/components';
import { useRouter } from 'next/navigation';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import Counter from '@/blocks/Components/Counter/Counter'; // Import the Counter component
import SplitText from '@/blocks/TextAnimations/SplitText/SplitText';

interface InitialLoadingLayoutProps {
  children: React.ReactNode;
}

export default function InitialLoadingLayout({ children }: InitialLoadingLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [animationKey, setAnimationKey] = useState(Date.now());
  const router = useRouter();

  useEffect(() => {
    // Listen for route changes to show loading state
    const handleStart = () => {
      setIsLoading(true);
      setAnimationKey(Date.now());
      setLoadingPercentage(0); // Reset percentage on new route
    };
    const handleComplete = () => setIsLoading(false);

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

    // Set initial loading to false after initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 5000);

    // Add event listeners for route changes
    router.events?.on('routeChangeStart', handleStart);
    router.events?.on('routeChangeComplete', handleComplete);
    router.events?.on('routeChangeError', handleComplete);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      router.events?.off('routeChangeStart', handleStart);
      router.events?.off('routeChangeComplete', handleComplete);
      router.events?.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (isLoading) {
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

          {/* Replace Text component with Counter */}
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

  return <>{children}</>;
}
