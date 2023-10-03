module.exports = {
  root: true,
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    // Allows for the use of imports
    sourceType: 'module',
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import'],
  extends: [
    'eslint:recommended',
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    // Enables plugin for NextJS App.
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'no-shadow': 0,
    'import/newline-after-import': ['warn', {count: 1}],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
  },
  globals: {
    __DEV__: true,
  },
};
