import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import autoprefixer from 'autoprefixer'

const root = process.cwd()

const pathResolve = (pathname: string) => resolve(root, '.', pathname)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: pathResolve('src') + '/',
            },
            // #/xxxx => types/xxxx
            {
                find: /#\//,
                replacement: pathResolve('types') + '/',
            }
        ],
    },
    plugins: [
        vue(),
        UnoCSS()

    ],
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
})
