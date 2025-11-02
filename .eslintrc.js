// .eslintrc.js
module.exports = {
  root: true,
  env: { node: true },
  extends: [
    "plugin:vue/essential",
    "@vue/typescript/recommended",
    "eslint:recommended"
  ],
  rules: {
    "vue/no-reserved-component-names": "off",
    "vue/multi-word-component-names": "off"
  }
}
