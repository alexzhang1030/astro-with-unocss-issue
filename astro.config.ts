import { defineConfig } from 'astro/config'
import Unocss from 'unocss/astro'
import { presetAttributify, presetUno } from 'unocss'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss({
    presets: [presetAttributify(), presetUno()],
  }), solidJs()],
})
