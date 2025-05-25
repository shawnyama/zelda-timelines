import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const plugins = [vue(), ViteImageOptimizer()]

  if (command === 'build') {
    plugins.push(
      viteStaticCopy({
        targets: [
          {
            src: 'README.md',
            dest: ''
          },
          {
            src: '.nojekyll',
            dest: ''
          }
        ]
      })
    )
  }

  return {
    base: '/',
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      target: 'esnext'
    }
  }
})
