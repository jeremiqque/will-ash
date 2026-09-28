import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported (smallest), then WebP, resized per device.
    formats: ["image/avif", "image/webp"],
    // Optimised images are cached for 31 days on the server/CDN.
    minimumCacheTTL: 2678400,
  },
  experimental: {
    // Put the (small) Tailwind CSS directly in the HTML so the first paint
    // doesn't wait for a separate stylesheet download.
    inlineCss: true,
  },
};

export default nextConfig;
