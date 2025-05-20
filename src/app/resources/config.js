// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = 'https://demo.magic-portfolio.com';

const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
  '/gallery': true
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
};

import { DM_Sans } from 'next/font/google';
import { DM_Mono } from 'next/font/google';

// Use DM Sans for all text
const dmSansFont = DM_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

// Use DM Mono for code blocks (monospace alternative that matches DM Sans)
const dmMonoFont = DM_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap'
});

const font = {
  primary: dmSansFont,
  secondary: dmSansFont,
  tertiary: dmSansFont,
  code: dmMonoFont
};

const style = {
  theme: 'dark', // theme is not necessary when using ThemeProvider (default)
  neutral: 'gray', // sand | gray | slate
  brand: 'cyan', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: 'red', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: 'contrast', // color | contrast
  solidStyle: 'flat', // flat | plastic
  border: 'playful', // rounded | playful | conservative
  surface: 'translucent', // filled | translucent
  transition: 'all', // all | micro | macro
  scaling: '100' // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: 'accent-background-strong',
    colorEnd: 'page-background'
  },
  dots: {
    display: true,
    opacity: 40,
    size: '2',
    color: 'brand-background-strong'
  },
  grid: {
    display: false,
    opacity: 100,
    color: 'neutral-alpha-medium',
    width: '0.25rem',
    height: '0.25rem'
  },
  lines: {
    display: false,
    opacity: 100,
    color: 'neutral-alpha-weak',
    size: '16',
    thickness: 1,
    angle: 45
  }
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

const mailchimp = {
  action: 'https://url/subscribe/post?parameters',
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: 'accent-background-strong',
      colorEnd: 'static-transparent'
    },
    dots: {
      display: true,
      opacity: 20,
      size: '2',
      color: 'brand-on-background-weak'
    },
    grid: {
      display: false,
      opacity: 100,
      color: 'neutral-alpha-medium',
      width: '0.25rem',
      height: '0.25rem'
    },
    lines: {
      display: false,
      opacity: 100,
      color: 'neutral-alpha-medium',
      size: '16',
      thickness: 1,
      angle: 90
    }
  }
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };
