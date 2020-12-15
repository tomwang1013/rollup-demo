import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx']
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts', '.tsx'],
      include: ['src/**/*']
    })
  ]
};
