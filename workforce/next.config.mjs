/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables React's Strict Mode (recommended)
    
    // Typescript options (if you are using TypeScript)
    typescript: {
      ignoreBuildErrors: false,  // Set to true if you want to bypass TypeScript errors during build
    },
  
    // Handling JavaScript and TypeScript extensions for pages and components
    pageExtensions: ['jsx', 'tsx', 'js', 'ts'], // Explicitly define page extensions
  
    // Custom Webpack Configuration (Optional, in case you need to add custom rules)
    webpack(config, { isServer }) {
      // Example: Allow loading jsx, tsx files correctly with Next.js Babel loader
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'next/babel',
      });
      return config;
    },
  
    // Optionally, you can configure the routing or rewrites
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/:path*', // Ensure routing works for both .js/.jsx and .ts/.tsx files
        },
      ];
    },
  };
  
  export default nextConfig;
  