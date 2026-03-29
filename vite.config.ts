import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 75, // Adjust quality (0-100) to balance size and clarity
      },
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
