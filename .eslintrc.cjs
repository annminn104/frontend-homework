module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'eslint-config-prettier', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-refresh/only-export-components': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'crlf',
        useTabs: false,
        singleQuote: true,
        printWidth: 150,
        jsxSingleQuote: true
      }
    ]
  }
};
