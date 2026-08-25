
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@/lib': resolve(__dirname, './'),
      '@/components': resolve(__dirname, './'),
      '@/components/ui': resolve(__dirname, './'),
      '@/components/landing': resolve(__dirname, './'),
      '@/hooks': resolve(__dirname, './')
    }
  }
});
