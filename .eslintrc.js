module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb-base',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['node_modules/', 'lib/'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': 'off',
    curly: [2, 'all'],
    'import/no-named-as-default': 'warn',
    'import/no-unresolved': 'warn',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: ['**/*.{test|spec}.js'] }],
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'no-useless-constructor': 'warn',
    'no-new': 'warn',
    'class-methods-use-this': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
