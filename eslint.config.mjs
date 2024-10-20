import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off','semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      '@typescript-eslint/no-explicit-any': 'off'
    },
  },
  ...tseslint.configs.recommended,
];
