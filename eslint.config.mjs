import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const config = [
  {files: ["./src/**/*.{js,mjs,cjs,ts,jsx,tsx}"], ignores: ["./dist/**", "./public/**"],settings: { react: { version: '18.3.1' } }},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]

export default config;
