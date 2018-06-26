import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
// uglify 不支持 es6，所以需要通过 uglify-es 插件


/**
 * 一个入口文件的多个版本，须将 output 设为数组
 */
export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/test_rollup.es.js',
      format: 'es', // es6，可以 import
      sourcemap: 'inline'
    },
    {
      file: 'dist/test_rollup.iife.js',
      format: 'iife', // 对于浏览器，编译成 IIFE 函数
      sourcemap: 'inline',
      name: 'test_rollup'
    },
    {
      file: 'dist/test_rollup.cjs.js',
      format: 'cjs', // 对于 Node.js，编译为 CommonJS 模块
      sourcemap: 'inline'
    },
    {
      file: 'dist/test_rollup.umd.js',
      format: 'umd', // 为了兼容浏览器和 Node.js，编译为 umd 格式
      sourcemap: 'inline',
      name: 'test_rollup'
    }
  ],
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
    // (uglify({}, minify))
  ]
};