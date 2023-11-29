module.exports = {
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
      },
    ],
  },
};
