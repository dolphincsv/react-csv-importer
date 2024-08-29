import {defineConfig} from 'vite'
import path from 'path';
import pkg from './package.json'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'DolphinCSV',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${pkg.version}.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist/packages'
  }
})
