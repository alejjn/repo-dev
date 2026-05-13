import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js}',
    }),
    viteStaticCopy({
      targets: [
        { src: 'assets/images', dest: 'assets' },
        { src: 'assets/videos', dest: 'assets' },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
