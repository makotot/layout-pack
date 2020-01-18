module.exports = {
  presets: [
    ['@babel/env', {
      modules: false,
    }],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
}
