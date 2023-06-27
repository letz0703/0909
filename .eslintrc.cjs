module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "esling:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parseOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { reset: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-co9mponents": "warn",
  },
}
