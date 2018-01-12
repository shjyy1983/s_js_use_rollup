import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
// uglify 不支持 es6，所以需要通过 uglify-es 插件


export default {
  input: 'src/index.js',
  output: {
    file: 'dist/test_rollup.min.js',
    format: 'es', // es6，可以 import
    name: 'test_rollup',
    sourcemap: 'inline'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    (uglify({}, minify))
  ]
};