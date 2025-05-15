/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This is the key configuration for static site generation
  images: {
    unoptimized: true, // Required for static export
  },
};
