import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      exports: 'auto',
    },
    {
      format: 'es',
      file: pkg.module,
    },
    {
      format: 'umd',
      file: pkg['umd:main'],
      name: pkg.name,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
