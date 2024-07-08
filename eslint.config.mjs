// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      "node_modules/*",
      "dist/*",
      "*.config.js",
      "*.d.ts",
      "*.config.mjs",
      "public/*",
    ],
  },
);
