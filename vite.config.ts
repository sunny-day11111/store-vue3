import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 如果报错就安装 npm i -D @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  },
})