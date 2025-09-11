import { defineConfig } from 'vite';

export default defineConfig({
  root: 'resources',
  build: {
    outDir: '../public/assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: './js/app.js',
        styles: './scss/styles.scss',
      },
    },
  },
});
