module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    eqeqeq: 'off',
    curly: 'error',
    'react/prop-types': 'off',
    quotes: ['error', 'single'],
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'max-len': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'linebreak-style': 'off',
  },
};
