import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import gzipPlugin from 'rollup-plugin-gzip';
import autoprefixer from 'autoprefixer';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import React from 'react';
import ReactIs from 'react-is';
// import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      format: 'cjs',
      dir: 'dist',
      exports: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src/components',
      sourcemap: false
    },
    {
      format: 'cjs',
      dir: 'dist',
      exports: 'auto',
      preserveModulesRoot: 'src',
      sourcemap: false
    },
    // {
    //   file: pkg.module,
    //   format: 'es',
    //   sourcemap: false
    // }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    external(),
    postcss({
      plugins: [postcssUrl({ url: 'inline' }), autoprefixer],
      extensions: ['.scss', '.css'],
      extract: true,
      minimize: true
    }),
    url(),
    json({
      exclude: ['node_modules/**']
    }),
    resolve(),
    typescript({
      exclude: ['node_modules/**', '*.d.ts', '**/*.d.ts'],
      useTsconfigDeclarationDir: true
    }),
    commonjs({
      namedExports: {
        react: Object.keys(React),
        'react-is': Object.keys(ReactIs),
        'keyboard-key': ['getKey']
      }
    }),
    gzipPlugin()
  ]
};
