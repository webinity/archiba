import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'resources',
  server: {
    port: 5174,
    strictPort: true,
    cors: true,
    origin: 'http://localhost:5174',
  },
  build: {
    outDir: '../public/assets',
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'resources/js/app.js'),
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
