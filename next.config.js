/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src/app', 'src/components'],
    // Warning: This allows you to disable specific rules that are causing problems
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
