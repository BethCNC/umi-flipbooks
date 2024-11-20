<<<<<<< HEAD
const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
>>>>>>> 601d8483f5fd200a4f5b6363cc4ce7f926768761
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  assetsInclude: ['**/*.pdf', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg', '**/*.json', '**/*.mp4'],
  base: '/',
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
  },
=======
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
>>>>>>> 601d8483f5fd200a4f5b6363cc4ce7f926768761
});