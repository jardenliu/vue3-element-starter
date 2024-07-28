// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'
export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            warn: true,
            collections: {
                ep: () => import('@iconify-json/ep/icons.json').then((i) => i.default),
            },
            extraProperties: {
                display: 'inline-block',
            },
        })
    ],
})