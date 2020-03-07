module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsdoc/recommended",
    "prettier",
    "prettier/react"
  ],
  root: true,
  plugins: ["prettier", "eslint-plugin-import-order-alphabetical", "jsdoc"],
  parser: "babel-eslint",
  rules: {
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "prettier/prettier": ["error"],
    "max-len": "off",
    "import-order-alphabetical/order": "error",
    "react/prop-types": 0,
    "jsdoc/require-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "max-lines": ["warn", 200],
    "max-lines-per-function": ["warn", 25]
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "jsdoc/require-returns": 0
      }
    },
    {
      files: ["**/*.jsx", "**/*.tsx"],
      rules: {
        // JSX is always a bit longer...
        "max-lines-per-function": ["warn", 75]
      }
    }
  ]
};
