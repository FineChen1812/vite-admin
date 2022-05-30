module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  global: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "standard"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
}
