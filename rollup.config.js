import * as fs from 'fs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import pkg from './package.json'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './src/index.ts',
  output: {
    format: 'iife',
    file: './dist/index.js',
    banner: () =>
      fs.promises
        .readFile('./banner.txt', 'utf8')
        .then((text) => text.replace('<version>', pkg.version)),
  },
  plugins: [
    typescript(),
    svelte({
      preprocess: sveltePreprocess(),
      emitCss: false,
    }),
    resolve({ browser: true }),
  ],
}

export default config
