import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import vueDts from "vite-plugin-dts";

export default defineConfig({
	plugins: [vueDts({ rollupTypes: true }), vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "../src")
		}
	},
	build: {
		sourcemap: true,
		lib: {
			name: "@paws/ui",
			entry: path.resolve(__dirname, "../src/index.ts"),
			formats: ["cjs", "es"],
			fileName: "index"
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue"
				}
			}
		}
	}
});
