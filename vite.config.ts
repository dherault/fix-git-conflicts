import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'fix-git-conflicts',
      fileName: format => `fix-git-conflicts.${format}.js`,
    },
  },
})
