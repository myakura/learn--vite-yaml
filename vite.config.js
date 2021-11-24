import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import yaml from '@rollup/plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), yaml()]
})
