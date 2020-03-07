module.exports = {
  plugins: ["stylelint-prettier"],
  rules: {
    /* Using `&__xxxxx` for BEM isn't really nesting is it */
    "max-nesting-depth": null,
    "prettier/prettier": true
  },
  ignoreFiles: ["**/*.js"]
};
