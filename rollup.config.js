import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    del({ targets: 'dist/types/*' }),
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
        'react-is': ['isForwardRef', 'isValidElementType'],
        'keyboard-key': ['getKey']
      }
    })
  ]
};
