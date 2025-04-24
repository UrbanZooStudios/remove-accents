import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['lib/**/index.ts'],
      include: ['lib/**'],
      provider: 'v8',
      reporter: ['clover', 'json-summary', 'html'],
    },
    globals: true,
    outputFile: 'junit.xml',
    reporters: ['basic', 'junit'],
  },
});
