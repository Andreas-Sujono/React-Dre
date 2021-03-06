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
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const indexFile = 'src/index.tsx';

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
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  commonjs(),
  terser()
];

const componentName = ['ClickOutsideHandler', 'Icon', 'CopyToClipboard', 'Modal', 'LoadingBar', 'SearchBar', 'Grid'];

const exported = componentName.map((component) => ({
  input: `src/components/${component}/index.ts`,
  output: [
    {
      format: 'cjs',
      dir: `dist/${component}`,
      sourcemap: false
    },
  ],
  plugins
}));

// export default {
//   input: indexFile,
//   output: [
//     {
//       file: pkg.main,
//       format: 'cjs',
//     },
//     {
//       file: pkg.module,
//       format: 'es',
//     },
//   ],
//   plugins: [del({ targets: 'dist/*' }), ...plugins]
// };

export default [{
  input: indexFile,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [del({ targets: 'dist/*' }), ...plugins]
},
...exported
];

// export default {
//   input: indexFile,
//   output: [
//     {
//       format: 'cjs',
//       dir: 'dist',
//       sourcemap: false,
//     },
//     {
//       format: 'cjs',
//       dir: 'dist',
//       exports: 'auto',
//       preserveModules: true,
//       preserveModulesRoot: 'src/components',
//       sourcemap: false,
//     },
//   ],
//   plugins: [del({ targets: 'dist/*' }), ...plugins]
// };
