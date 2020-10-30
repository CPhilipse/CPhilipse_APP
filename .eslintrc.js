module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

// TODO: Try these configurations
// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   env: {
//     browser: true,
//     jest: true,
//   },
//   extends: [
//     'eslint-config-airbnb-base',
//     'eslint-config-airbnb-base/rules/strict',
//     'prettier',
//     'prettier/react',
//     'prettier/@typescript-eslint',
//     '@react-native-community',
//   ],
//   plugins: ['import', 'react', 'prettier', '@typescript-eslint'],
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', 'jsx', '.ts', '.tsx'],
//       },
//     },
//   },
//   rules: {
//     'global-require': 0,
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: ['{jest,__tests__}/**'],
//         optionalDependencies: false,
//         peerDependencies: false,
//       },
//     ],
//     'react/jsx-filename-extension': 0,
//     'react/react-in-jsx-scope': 2,
//     'no-use-before-define': 0,
//     'no-empty-pattern': 0,
//     'no-plusplus': [
//       'error',
//       {
//         allowForLoopAfterthoughts: true,
//       },
//     ],
//     // prettier compatibility
//     'max-len': 0,
//     'prettier/prettier': [
//       'error',
//       { singleQuote: true, trailingComma: 'all', printWidth: 100, tabWidth: 2 },
//     ],
//     'linebreak-style': 0,
//     'no-underscore-dangle': 0,
//     'import/prefer-default-export': 0,
//   },
// };
