import path from 'node:path'
import { defineConfig, InlineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import from Vit instead of vitest
import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    enviroment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
