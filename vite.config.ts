import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', 'three-stdlib'],
          'vendor-motion': ['framer-motion'],
          'vendor-xterm': ['@xterm/xterm', '@xterm/addon-fit'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Disable sourcemaps in production for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn'], // Remove specific console methods
      },
    },
    cssCodeSplit: true,
    // Enable gzip compression
    reportCompressedSize: true,
    // Reduce bundle size
    target: 'es2020',
    assetsInlineLimit: 4096, // Inline small assets
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      'three-stdlib',
      'framer-motion',
      '@xterm/xterm',
      '@xterm/addon-fit'
    ],
    // Pre-bundle these dependencies for faster dev startup
    force: false, // Don't force rebuild unless needed
  },
  server: {
    // Enable HMR for better development experience
    hmr: {
      overlay: false // Disable error overlay for better UX
    },
    // Faster builds
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  esbuild: {
    // Optimize JS/TS builds
    target: 'es2020',
    // Remove unused imports automatically
    treeShaking: true,
  },
  // Enable CSS preprocessing optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Reduce CSS bundle size
      scss: {
        charset: false,
      },
    },
  },
});
