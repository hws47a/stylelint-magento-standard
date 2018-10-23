"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "no-descending-specificity": null,
    "indentation": 4,
    "string-quotes": "single",
    "selector-max-id": 0,
    "selector-class-pattern": "^_?[a-z0-9]+(-[a-z0-9]+)*$",
    "max-nesting-depth": 4,
    "number-leading-zero": "never",
    "max-empty-lines": 2
  }
}
