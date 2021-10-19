import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

const isProductionMode = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'Vue2HelloWorld',
      fileName: (format) => `vue2-hello-world.${format}.js`
    },
    sourcemap: isProductionMode,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
      }
    }
  }
})
