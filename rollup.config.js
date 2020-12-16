import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    exports: 'auto'
  },
  external: [
    'react',
    'react-dom',

    // for https://babeljs.io/docs/en/babel-plugin-transform-runtime#helper-aliasing to work
    // if not set, helpers will be inlined in the output file
    /@babel\/runtime/,
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.tsx']
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts', '.tsx'],
      include: ['src/**/*']
    })
  ]
};
