import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			strict: false,
			pages: "build",
			assets: "build",
			fallback: "index.html",
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "" : "",
		},
	},
};

export default config;
