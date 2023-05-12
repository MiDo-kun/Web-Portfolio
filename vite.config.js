import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ESLint } from 'eslint';
import { format } from 'prettier';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Add this to run ESLint and Prettier
  esbuild: {
    jsxInject: `import React from 'react';`,
    jsxFactory: `React.createElement`,
    jsxFragment: `React.Fragment`,
    define: {
      '__DEV__': JSON.stringify(true),
    },
  },
  async onLoad({ filePath, contents }) {
    if (/\.[jt]sx?$/.test(filePath)) {
      const eslint = new ESLint();
      const results = await eslint.lintText(contents, { filePath });
      const formatter = await eslint.loadFormatter('stylish');
      const resultText = formatter.format(results);
      if (resultText) {
        console.log(resultText);
      }

      const formattedCode = format(contents, { filepath: filePath });
      if (formattedCode !== contents) {
        console.log(`Formatted ${filePath}`);
      }

      return {
        code: formattedCode,
      };
    }
  },
});