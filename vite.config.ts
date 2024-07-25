import { defineConfig } from 'vite'
import path from 'path'
// import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'
// import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  preview: {
    port: 80,
  },
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
    ]),
    // tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
