import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static brochure site — no server, no CMS, no database.
  output: 'export',
  images: {
    // next/image's optimiser needs a server; static export requires unoptimised.
    unoptimized: true,
  },
  // Emit /experiences/index.html rather than /experiences.html so the export
  // works on any static host without rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
