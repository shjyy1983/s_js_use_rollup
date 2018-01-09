import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/drawlayer.min.js',
    format: 'cjs',
    name: 'drawlayer',
    sourcemap: false
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
    (uglify())
  ]
};