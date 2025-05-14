'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Fade, Flex, Line, ToggleButton } from '@/once-ui/components';
import styles from '@/components/Header.module.scss';
import { routes, display } from '@/app/resources';
import { person, about, blog, work, gallery } from '@/app/resources/content';
import { ThemeToggle } from './ThemeToggle';

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Map incorrect time zones to correct ones
      const timeZoneMap: Record<string, string> = {
        'Asia/India': 'Asia/Kolkata',
        'Asia/Chennai': 'Asia/Kolkata' // Chennai uses Asia/Kolkata time zone
      };
      const correctTimeZone = timeZoneMap[timeZone] || timeZone;

      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: correctTimeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        const timeString = new Intl.DateTimeFormat(locale, options).format(now);
        setCurrentTime(timeString);
      } catch (error) {
        console.error('Error formatting time:', error);
        // Fallback to local time if there's an error
        setCurrentTime(now.toLocaleTimeString(locale, { hour12: false }));
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? '';
  const [scrolled, setScrolled] = useState(false);
  const [headerMaxWidth, setHeaderMaxWidth] = useState('600px'); // Initial max-width

  // Add scroll listener to detect when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        // Expand header when scrolled
        setHeaderMaxWidth(isScrolled ? '800px' : '600px');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            style={{
              maxWidth: headerMaxWidth,
              transition: 'max-width 0.4s ease-in-out'
            }}
            className={scrolled ? styles.scrolledHeader : ''}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes['/'] && <ToggleButton prefixIcon="home" href="/" selected={pathname === '/'} />}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes['/about'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === '/about'}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === '/about'}
                  />
                </>
              )}
              {routes['/work'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith('/work')}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith('/work')}
                  />
                </>
              )}
              {routes['/gallery'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith('/gallery')}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith('/gallery')}
                  />
                </>
              )}
              {routes['/blog'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith('/blog')}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith('/blog')}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
