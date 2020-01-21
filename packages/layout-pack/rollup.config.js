import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const extensions = ['.ts', '.tsx']

export default {
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.js',
      format: 'cjs',
    },
    {
      file: './lib/index.esm.js',
      format: 'esm',
    },
    {
      file: './lib/index.umd.js',
      format: 'umd',
      name: 'layoutPack',
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
  external: [
  ],
}
