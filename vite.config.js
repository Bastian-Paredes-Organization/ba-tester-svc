import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    outDir: 'build',
    rollupOptions: {
      input: path.resolve(process.cwd(), 'src/script/index.ts'),
      output: {
        entryFileNames: 'script.js',
      },
    },
  },
});
