import path from 'path';
import json from 'rollup-plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

const indexFile = 'src/index.tsx';

const libRoot = path.join(__dirname, './lib');
const distRoot = path.join(libRoot, 'dist');
const cjsRoot = path.join(libRoot, 'cjs');
const esRoot = path.join(libRoot, 'esm');

const plugins = [
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
    useTsconfigDeclarationDir: true,
    rollupCommonJSResolveHack: true,
    clean: true,
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    babelHelpers: 'bundled'
  }),
  terser()
];

const componentName = ['ClickOutsideHandler', 'Icon', 'CopyToClipboard', 'Modal', 'LoadingBar', 'SearchBar', 'Grid',
  'Button'];

const exported = componentName.map((component) => ({
  input: `src/components/${component}/index.ts`,
  output: [
    {
      format: 'cjs',
      file: `${cjsRoot}/${component}.js`,
      sourcemap: false
    },
    {
      format: 'es',
      file: `${esRoot}/${component}.js`,
      sourcemap: false
    },
  ],
  plugins
}));

export default [{
  input: indexFile,
  output: [
    {
      file: path.join(distRoot, 'index.js'),
      format: 'cjs',
    },
    {
      file: path.join(cjsRoot, 'index.js'),
      format: 'cjs',
    },
    {
      file: path.join(distRoot, 'index.es.js'),
      format: 'es',
    },
    {
      file: path.join(esRoot, 'index.es.js'),
      format: 'es',
    },
  ],
  plugins: [del({ targets: libRoot }), ...plugins]
},
...exported
];
