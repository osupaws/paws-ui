import tseslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import fs from "fs";
import path from "path";

// Load Prettier options from config/.prettierrc so ESLint's prettier rule uses the same settings
const prettierConfigPath = path.resolve(process.cwd(), "config/.prettierrc");
let prettierOptions = {};

try {
	const raw = fs.readFileSync(prettierConfigPath, "utf8");
	prettierOptions = JSON.parse(raw);
} catch {}

export default tseslint.config(
	{
		ignores: [
			".idea",
			".vscode",
			"build",
			"**/node_modules",
			"**/dist",
			"**/out",
			"**/*.js",
			"ui-kit"
		]
	},
	tseslint.configs.recommended,
	eslintPluginVue.configs["flat/recommended"],
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				extraFileExtensions: [".vue"],
				parser: tseslint.parser
			}
		}
	},
	{
		files: ["**/*.{ts,vue}"],
		plugins: {
			"simple-import-sort": simpleImportSort,
			"unused-imports": unusedImports,
			prettier: eslintPluginPrettier
		},
		rules: {
			// Prettier rule to show formatting errors
			"prettier/prettier": ["error", prettierOptions],

			// Vue-specific rules (non-stylistic)
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"vue/require-default-prop": "off",
			"vue/multi-word-component-names": "off",
			"vue/block-lang": [
				"error",
				{
					script: {
						lang: "ts"
					}
				}
			],

			// Code Quality Rules
			yoda: "error",
			eqeqeq: ["error", "always", { null: "ignore" }],
			"prefer-destructuring": [
				"error",
				{
					VariableDeclarator: { array: false, object: true },
					AssignmentExpression: { array: false, object: false }
				}
			],
			"operator-assignment": ["error", "always"],
			"no-useless-computed-key": "error",
			"no-useless-catch": "off",
			"no-unneeded-ternary": ["error", { defaultAssignment: false }],
			"no-invalid-regexp": "error",
			"no-constant-condition": ["error", { checkLoops: false }],
			"no-duplicate-imports": "error",
			"dot-notation": "error",
			"no-useless-escape": "error",
			"no-fallthrough": "error",
			"for-direction": "error",
			"no-async-promise-executor": "error",
			"no-cond-assign": "error",
			"no-dupe-else-if": "error",
			"no-duplicate-case": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-prototype-builtins": "error",
			"no-regex-spaces": "error",
			"no-shadow-restricted-names": "error",
			"no-unexpected-multiline": "error",
			"no-unsafe-optional-chaining": "error",
			"no-useless-backreference": "error",
			"use-isnan": "error",
			"prefer-const": "error",
			"prefer-spread": "error",

			// Import sorting
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"unused-imports/no-unused-imports": "error"
		}
	},
	// Always keep eslint-config-prettier last to turn off conflicting stylistic rules
	eslintConfigPrettier
);
