module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {},
};
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     "airbnb",
//     "plugin:react/recommended",
//     "plugin:prettier/recommended",
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "prettier"],
//   settings: {
//     "import/resolver": {
//       node: {
//         paths: ["src"],
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//       },
//     },
//   },
//   rules: {
//     "prettier/prettier": "error",
//   },
// };
