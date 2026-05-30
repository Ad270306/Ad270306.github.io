import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Indique à Next.js de générer un site statique (obligatoire pour GitHub Pages)
  output: 'export',
  // Désactive l'optimisation d'images par défaut de Next.js (non supportée en export statique)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;