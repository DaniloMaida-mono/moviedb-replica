import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        fs: {
            allow: ['..'],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$blue:rgb(3, 37, 65);`,
            },
        },
    },
})
