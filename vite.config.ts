import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'

export default defineConfig({
  plugins: [vue(),vueJsx()],
  server: {
    open: true,
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagou.com/api',// 代理的目标地址
        // 兼容基于名字的虚拟机
        // http 头部的origin字段
        // 开发模式下 origin 是真实的origin ： loaclhost:3000
        //changeOrigin: true,代理服务会把origin修改为目标地址
        changeOrigin: true,
        // 路径重写
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/style/variables.scss';`
      }
    }
  }
})
