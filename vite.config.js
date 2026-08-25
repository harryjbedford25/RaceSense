
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://racesense.info',
        changeOrigin: true,
        secure: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('proxying request to:', options.target + req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('proxy response status:', proxyRes.statusCode);
          });
        }
      }
    }
  },
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
