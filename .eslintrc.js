module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "strict": "off",
    "no-console": "off",
    "no-inline-comments": "off",
    "no-undef": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
