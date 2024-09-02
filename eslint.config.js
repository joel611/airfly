module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all', arrowParens: 'always', printWidth: 120, tabWidth: 2 }],
  },
};
