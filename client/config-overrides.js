const {
  override,
  addDecoratorsLegacy
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy()
);